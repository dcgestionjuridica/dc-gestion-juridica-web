// V1.3.397 (pedido de Darío, 22/10/2026): cada congelamiento, error o cierre anormal deja un registro
// que la aplicación envía a Auditoría (módulo «Errores de la aplicación»), con el detalle para arreglarlo.
// Nunca guarda datos de clientes: solo la pantalla, la ruta del pedido (sin filtros) y el mensaje técnico.
(function () {
  const COLA = "dc-diag-cola", LATIDO = "dc-diag-latido", CIERRE = "dc-diag-cierre", ESPERA = "dc-diag-esperando";
  const MAX_COLA = 30;
  const leer = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const poner = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const quitar = (k) => { try { localStorage.removeItem(k); } catch (e) {} };
  // 29/10/2026: el latido, el cierre y la espera van en la memoria de ESTA pestaña (sessionStorage). Antes iban en la
  // memoria compartida y, con dos ventanas abiertas (la app instalada y una pestaña de Chrome), la ventana nueva leía el
  // latido de la otra, que seguía viva, y anotaba un «CIERRE_ANORMAL» falso. Al recargar (F5) la pestaña conserva esta memoria.
  const leerP = (k) => { try { return sessionStorage.getItem(k); } catch (e) { return null; } };
  const ponerP = (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} };
  const quitarP = (k) => { try { sessionStorage.removeItem(k); } catch (e) {} };
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
      // V1.7.38: el mismo error repetido sin parar (p. ej. en cada cuadro) ya no llena la cola: se cuenta en el
      // primero. Antes la cola (30) se llenaba en 5 segundos y se perdía el primer error, que es el que dice la causa.
      const ult = cola[cola.length - 1];
      if (ult && ult.tipo === String(tipo).slice(0, 120) && ult.mensaje === String(mensaje || "").slice(0, 3900) && Date.now() - Date.parse(ult.fecha) < 120000) {
        ult.detalle = Object.assign(ult.detalle || {}, { veces: ((ult.detalle && ult.detalle.veces) || 1) + 1 });
        poner(COLA, JSON.stringify(cola));
        return;
      }
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
    empieza(metodo, url) { ponerP(ESPERA, JSON.stringify({ metodo, ruta: ruta(url), desde: new Date().toISOString(), pantalla: D.pantalla })); return performance.now(); },
    termina(metodo, url, inicio, estado) {
      quitarP(ESPERA);
      const ms = Math.round(performance.now() - inicio);
      pedidos.push({ metodo, ruta: ruta(url), ms, estado, hora: new Date().toISOString().slice(11, 19) });
      if (pedidos.length > 20) pedidos.shift();
      // V1.3.399: solo lo grave (pedido de Darío); la espera queda en el congelamiento que causa (pedidosRecientes).
    },

    /** Lo llama la aplicación cada segundo: si deja de llegar, la pantalla está congelada. */
    latido() { ponerP(LATIDO, JSON.stringify({ t: Date.now(), pantalla: D.pantalla })); }
  });

  // Solo la ruta (tabla o función), nunca los filtros: pueden llevar nombres o cédulas.
  function ruta(url) { try { return new URL(url, location.href).pathname.replace(/^\/(rest|functions)\/v1\//, ""); } catch (e) { return "?"; } }

  // ¿La vez pasada se cerró bien? Si no, pudo quedarse congelada o colgada.
  const anterior = leerP(LATIDO), cerro = leerP(CIERRE), esperando = leerP(ESPERA);
  // Lo que quedó de versiones anteriores en la memoria compartida ya no sirve (y daba avisos falsos).
  quitar(LATIDO); quitar(CIERRE); quitar(ESPERA);
  let a = {}; try { a = JSON.parse(anterior || "{}"); } catch (x) {}
  // Un latido de hace menos de 3 s es de una pestaña que sigue viva (p. ej. «Duplicar pestaña»), no de un cierre.
  const reciente = a.t && Date.now() - a.t < 3000;
  if (esperando) {
    let e = {}; try { e = JSON.parse(esperando); } catch (x) {}
    D.registrar("BLOQUEO", "La aplicación se cerró o se recargó mientras esperaba al servidor (" + (e.ruta || "?") + "). Probablemente se quedó colgada.", { esperaba: e });
  } else if (anterior && !cerro && !reciente) {
    D.registrar("CIERRE_ANORMAL", "La vez anterior la aplicación no terminó normalmente (pudo quedarse congelada o el navegador la cerró).",
      { ultimoLatido: a.t ? new Date(a.t).toISOString() : "", pantallaAnterior: a.pantalla || "" });
  }
  quitarP(ESPERA); quitarP(CIERRE); quitarP(LATIDO);
  addEventListener("pagehide", () => ponerP(CIERRE, "1"));
  addEventListener("pageshow", () => quitarP(CIERRE));
  // V1.7.20 (13/11/2026): en celulares y tabletas, cuando la app queda atrás (otra app, pantalla apagada), el sistema
  // puede cerrar la pestaña sin avisar («pagehide» no llega) y al volver Chrome la recarga. Eso no es una falla de la
  // app, pero se anotaba «CIERRE_ANORMAL». Ahora, al quedar oculta, se marca como cierre normal; al volver, se quita.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") ponerP(CIERRE, "1"); else quitarP(CIERRE);
  });

  // Congelamientos: tareas que ocuparon la pantalla 5 s o más (Chrome y Edge).
  try {
    new PerformanceObserver((lista) => {
      for (const t of lista.getEntries()) {
        if (t.duration >= 5000) D.registrar("CONGELAMIENTO", "La pantalla se quedó quieta " + (t.duration / 1000).toFixed(1) + " s en «" + D.pantalla + "».", { milisegundos: Math.round(t.duration) });
      }
    }).observe({ type: "longtask", buffered: true });
  } catch (e) {}

  // Errores que nadie atrapó.
  addEventListener("error", (e) => { D.registrar("ERROR_NAVEGADOR", (e.message || "Error").slice(0, 500), { archivo: e.filename ? ruta(e.filename) : "", linea: e.lineno, pila: (e.error && e.error.stack || "").slice(0, 6000) }); vigilarPantalla(); });
  addEventListener("unhandledrejection", (e) => { const r = e.reason || {}; D.registrar("ERROR_NAVEGADOR", String(r.message || r).slice(0, 500), { pila: String(r.stack || "").slice(0, 6000) }); vigilarPantalla(); });

  // V1.7.38 (19/11/2026, pedido de Darío: «no quiero más cuelgues jamás»): RECUPERACIÓN SOLA.
  // En el navegador, cuando la interfaz se rompe al dibujarse, la página queda quieta para siempre (no responde
  // a clics ni avanza). Después de cada error que nadie atrapó se le pregunta a la aplicación si todavía dibuja
  // (DC_DIAG.pidePruebaCuadro → la app contesta con cuadroDibujado). Si en 2,5 s no contesta, o el error se repite
  // sin parar, la página se recarga sola y vuelve a la misma pantalla con la sesión abierta (la sesión vive en
  // esta pestaña). Si la misma pantalla se vuelve a romper enseguida, vuelve a Inicio. Si se rompe 3 veces en
  // 2 minutos, ya no recarga: muestra un aviso para recargar a mano (así nunca queda en un ciclo).
  const RECUP = "dc-diag-recuperacion";
  let vigilando = false, erroresSeguidos = 0;
  D.pidePruebaCuadro = false;
  D.cuadroDibujado = () => { D.pidePruebaCuadro = false; D._ultimoCuadro = Date.now(); };
  D.pantallaRecuperada = () => {
    let r = null; try { r = JSON.parse(leerP(RECUP) || "null"); } catch (x) {}
    if (!r || !r.pendiente) return "";
    r.pendiente = false; ponerP(RECUP, JSON.stringify(r));
    return r.pantalla || "DASHBOARD";
  };
  function vigilarPantalla() {
    erroresSeguidos++;
    if (vigilando) return;
    vigilando = true;
    const desde = Date.now();
    D.pidePruebaCuadro = true;
    setTimeout(() => {
      vigilando = false;
      const respondio = (D._ultimoCuadro || 0) >= desde;
      const repetido = erroresSeguidos >= 4;
      erroresSeguidos = 0;
      // Una pestaña oculta no dibuja: no es un cuelgue. Se revisa otra vez al volver.
      if (document.visibilityState === "hidden") { D.pidePruebaCuadro = false; return; }
      if (respondio && !repetido) return;
      recuperar(repetido ? "el error se repetía sin parar" : "la pantalla dejó de responder");
    }, 2500);
  }
  function recuperar(motivo) {
    let r = {}; try { r = JSON.parse(leerP(RECUP) || "{}"); } catch (x) {}
    const ahora = Date.now();
    const veces = (r.veces || []).filter((t) => ahora - t < 120000);
    veces.push(ahora);
    const misma = r.pantalla === D.pantalla && r.en && ahora - r.en < 60000;
    D.registrar("RECUPERACION", "La pantalla «" + D.pantalla + "» se rompió (" + motivo + ") y la aplicación se recargó sola.", { veces: veces.length });
    if (veces.length >= 3) { mostrarAvisoRecargar(); ponerP(RECUP, JSON.stringify({ veces, en: ahora, pantalla: D.pantalla, pendiente: false })); return; }
    ponerP(RECUP, JSON.stringify({ veces, en: ahora, pantalla: misma ? "DASHBOARD" : D.pantalla, pendiente: true }));
    ponerP(CIERRE, "1");
    location.reload();
  }
  function mostrarAvisoRecargar() {
    if (document.getElementById("dc-aviso-recargar")) return;
    const c = document.createElement("div");
    c.id = "dc-aviso-recargar";
    c.setAttribute("style", "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(11,31,58,.55);font-family:system-ui,Segoe UI,Arial,sans-serif");
    c.innerHTML = '<div style="background:#fff;border-radius:12px;padding:24px 28px;max-width:420px;box-shadow:0 12px 40px rgba(0,0,0,.25);text-align:center">' +
      '<div style="font-size:18px;font-weight:700;color:#0B1F3A;margin-bottom:8px">La aplicación tuvo un problema</div>' +
      '<div style="font-size:14px;color:#44546A;margin-bottom:18px">Ya quedó registrado para revisarlo. Pulse el botón para seguir trabajando.</div>' +
      '<button style="background:#0B1F3A;color:#fff;border:0;border-radius:8px;padding:10px 22px;font-size:14px;font-weight:600;cursor:pointer">Volver a cargar</button></div>';
    c.querySelector("button").onclick = () => { try { sessionStorage.removeItem(RECUP); } catch (x) {} location.reload(); };
    document.body.appendChild(c);
  }
})();
