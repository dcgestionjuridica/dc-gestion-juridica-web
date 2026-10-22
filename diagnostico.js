// V1.3.397 (pedido de Darío, 22/10/2026): cada congelamiento, error o cierre anormal deja un registro
// que la aplicación envía a Auditoría (módulo «Errores de la aplicación»), con el detalle para arreglarlo.
// Nunca guarda datos de clientes: solo la pantalla, la ruta del pedido (sin filtros) y el mensaje técnico.
(function () {
  const COLA = "dc-diag-cola", LATIDO = "dc-diag-latido", CIERRE = "dc-diag-cierre", ESPERA = "dc-diag-esperando";
  const MAX_COLA = 30;
  const leer = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const poner = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const quitar = (k) => { try { localStorage.removeItem(k); } catch (e) {} };
  const pedidos = [];

  const D = (window.DC_DIAG = {
    pantalla: "Inicio de la aplicación",
    version: "",

    /** Anota un problema. [detalle] es un objeto con todo lo que sirva para arreglarlo. */
    registrar(tipo, mensaje, detalle) {
      let cola = [];
      try { cola = JSON.parse(leer(COLA) || "[]"); } catch (e) {}
      const d = Object.assign({
        pantalla: D.pantalla,
        version: D.version,
        navegador: (navigator.userAgent || "").slice(0, 300),
        pantallaTamano: innerWidth + "×" + innerHeight,
        enLinea: navigator.onLine,
        pedidosRecientes: pedidos.slice(-8)
      }, detalle || {});
      cola.push({ fecha: new Date().toISOString(), tipo: String(tipo).slice(0, 120), mensaje: String(mensaje || "").slice(0, 3900), detalle: d });
      while (cola.length > MAX_COLA) cola.shift();
      poner(COLA, JSON.stringify(cola));
    },

    /** La aplicación se lleva la cola para enviarla a Auditoría (y la devuelve si no pudo). */
    tomar() { const t = leer(COLA) || "[]"; quitar(COLA); return t; },
    devolver(texto) {
      try {
        const viejos = JSON.parse(texto || "[]");
        const nuevos = JSON.parse(leer(COLA) || "[]");
        poner(COLA, JSON.stringify(viejos.concat(nuevos).slice(-MAX_COLA)));
      } catch (e) {}
    },

    /** Pedido al servidor que deja la pantalla esperando: antes y después. */
    empieza(metodo, url) { poner(ESPERA, JSON.stringify({ metodo, ruta: ruta(url), desde: new Date().toISOString(), pantalla: D.pantalla })); return performance.now(); },
    termina(metodo, url, inicio, estado) {
      quitar(ESPERA);
      const ms = Math.round(performance.now() - inicio);
      pedidos.push({ metodo, ruta: ruta(url), ms, estado, hora: new Date().toISOString().slice(11, 19) });
      if (pedidos.length > 20) pedidos.shift();
      if (ms >= 2500) D.registrar("ESPERA_LARGA", "La pantalla esperó " + (ms / 1000).toFixed(1) + " s una respuesta del servidor (" + ruta(url) + ").", { ruta: ruta(url), metodo, milisegundos: ms, estado });
      if (estado === 0) D.registrar("SIN_CONEXION", "No se pudo llegar al servidor (" + ruta(url) + ").", { ruta: ruta(url), metodo });
    },

    /** Lo llama la aplicación cada segundo: si deja de llegar, la pantalla está congelada. */
    latido() { poner(LATIDO, JSON.stringify({ t: Date.now(), pantalla: D.pantalla })); }
  });

  // Solo la ruta (tabla o función), nunca los filtros: pueden llevar nombres o cédulas.
  function ruta(url) { try { return new URL(url, location.href).pathname.replace(/^\/(rest|functions)\/v1\//, ""); } catch (e) { return "?"; } }

  // ¿La vez pasada se cerró bien? Si no, pudo quedarse congelada o colgada.
  const anterior = leer(LATIDO), cerro = leer(CIERRE), esperando = leer(ESPERA);
  if (esperando) {
    let e = {}; try { e = JSON.parse(esperando); } catch (x) {}
    D.registrar("BLOQUEO", "La aplicación se cerró o se recargó mientras esperaba al servidor (" + (e.ruta || "?") + "). Probablemente se quedó colgada.", { esperaba: e });
  } else if (anterior && !cerro) {
    let a = {}; try { a = JSON.parse(anterior); } catch (x) {}
    D.registrar("CIERRE_ANORMAL", "La vez anterior la aplicación no terminó normalmente (pudo quedarse congelada o el navegador la cerró).",
      { ultimoLatido: a.t ? new Date(a.t).toISOString() : "", pantallaAnterior: a.pantalla || "" });
  }
  quitar(ESPERA); quitar(CIERRE); quitar(LATIDO);
  addEventListener("pagehide", () => poner(CIERRE, "1"));
  addEventListener("pageshow", () => quitar(CIERRE));

  // Congelamientos: tareas que ocuparon la pantalla más de 1,5 s (Chrome y Edge).
  try {
    new PerformanceObserver((lista) => {
      for (const t of lista.getEntries()) {
        if (t.duration >= 1500) D.registrar("CONGELAMIENTO", "La pantalla se quedó quieta " + (t.duration / 1000).toFixed(1) + " s en «" + D.pantalla + "».", { milisegundos: Math.round(t.duration) });
      }
    }).observe({ type: "longtask", buffered: true });
  } catch (e) {}

  // Errores que nadie atrapó.
  addEventListener("error", (e) => D.registrar("ERROR_NAVEGADOR", (e.message || "Error").slice(0, 500), { archivo: e.filename ? ruta(e.filename) : "", linea: e.lineno, pila: (e.error && e.error.stack || "").slice(0, 6000) }));
  addEventListener("unhandledrejection", (e) => { const r = e.reason || {}; D.registrar("ERROR_NAVEGADOR", String(r.message || r).slice(0, 500), { pila: String(r.stack || "").slice(0, 6000) }); });
})();
