// 26/11/2026 (pedido de Darío): que Chrome ofrezca GUARDAR la contraseña y la SUGIERA al entrar.
// La pantalla de ingreso se dibuja (no son casillas normales de una página), por eso Chrome no la reconocía.
// Este archivo no cambia nada visible: usa la función oficial del navegador para contraseñas.
//  1) Guardar: solo después de que el servidor aceptó el correo y la contraseña Y la app pasó del ingreso
//     a otra pantalla (si el usuario no está activo, no se guarda nada).
//  2) Sugerir: al tocar la casilla del correo vacía, Chrome muestra las cuentas guardadas; al elegir una,
//     se escriben el correo y la contraseña en la pantalla y el usuario solo oprime «Ingresar».
// Navegadores sin esta función (Safari, Firefox): no pasa nada, la pantalla sigue igual.
(function () {
  if (!window.PasswordCredential || !navigator.credentials || !window.fetch) return;
  var enIngreso = function () { var h = location.hash || ""; return h === "" || h.indexOf("#/login") === 0; };

  // 1) Guardar
  var fetchOriginal = window.fetch;
  window.fetch = function (url, opciones) {
    var promesa = fetchOriginal.apply(window, arguments);
    try {
      var u = typeof url === "string" ? url : (url && url.url) || "";
      if (u.indexOf("/auth/v1/token?grant_type=password") >= 0 && opciones && typeof opciones.body === "string") {
        var d = JSON.parse(opciones.body);
        if (d.email && d.password) promesa.then(function (r) {
          if (!r.ok) return;
          var vueltas = 0;
          var mirar = setInterval(function () {
            vueltas++;
            if (!enIngreso()) {
              clearInterval(mirar);
              navigator.credentials.store(new PasswordCredential({ id: d.email, password: d.password, name: d.email })).catch(function () {});
            } else if (vueltas > 120) clearInterval(mirar); // 60 s sin entrar: no se guarda
          }, 500);
        }, function () {});
      }
    } catch (e) {}
    return promesa;
  };

  // 2) Sugerir
  var campoActivo = function () {
    var hallado = null;
    var recorrer = function (raiz) {
      raiz.querySelectorAll("*").forEach(function (e) {
        if (!hallado && e.classList && e.classList.contains("compose-backing-field")) hallado = e;
        if (!hallado && e.shadowRoot) recorrer(e.shadowRoot);
      });
    };
    recorrer(document);
    return hallado;
  };
  var escribir = function (campo, texto) {
    campo.dispatchEvent(new InputEvent("beforeinput", { inputType: "insertText", data: texto, bubbles: true, cancelable: true }));
    campo.value = texto;
    campo.dispatchEvent(new InputEvent("input", { inputType: "insertText", data: texto, bubbles: true }));
  };
  var tecla = function (campo, nombre, codigo) {
    campo.dispatchEvent(new KeyboardEvent("keydown", { key: nombre, code: nombre, keyCode: codigo, bubbles: true, cancelable: true }));
    campo.dispatchEvent(new KeyboardEvent("keyup", { key: nombre, code: nombre, keyCode: codigo, bubbles: true }));
  };
  var preguntado = false;
  // La casilla que recibe lo que se escribe aparece un instante después del toque (no avisa al enfocarse).
  var revisar = function () {
    if (preguntado || !enIngreso()) return;
    var campo = campoActivo();
    if (!campo || campo.getAttribute("inputmode") !== "email" || campo.value) return;
    preguntado = true; // una sola vez por visita, para no molestar
    navigator.credentials.get({ password: true, mediation: "optional" }).then(function (c) {
      if (!c || !c.password || !enIngreso()) return;
      var correo = campoActivo();
      if (!correo || correo.getAttribute("inputmode") !== "email" || correo.value) return;
      escribir(correo, c.id);
      setTimeout(function () {
        tecla(correo, "Tab", 9); // pasa a la casilla de la contraseña
        setTimeout(function () {
          var clave = campoActivo();
          if (clave && clave.getAttribute("inputmode") === "password" && !clave.value) escribir(clave, c.password);
        }, 300);
      }, 200);
    }).catch(function () {});
  };
  document.addEventListener("pointerup", function () { if (!preguntado && enIngreso()) setTimeout(revisar, 250); }, true);
  document.addEventListener("keyup", function (e) { if (e.key === "Tab" && !preguntado && enIngreso()) setTimeout(revisar, 250); }, true);
})();
