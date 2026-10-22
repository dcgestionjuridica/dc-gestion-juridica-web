// V1.3.391: «Cargar comprobante» en Registrar pago. Lee la imagen en el navegador con Tesseract (nada sale del
// equipo) y recibe la imagen pegada con Ctrl+V o soltada sobre la página mientras la ventana de pago está abierta.
(function () {
  const O = window.DC_OCR = { resultado: "", error: "", recibida: null };
  let tesseract = null, escuchando = false;
  function cargarTesseract() {
    if (tesseract) return tesseract;
    tesseract = new Promise((ok, mal) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
      s.onload = () => ok(window.Tesseract);
      s.onerror = () => { tesseract = null; mal(new Error("No se pudo cargar el lector de comprobantes. Revise el internet.")); };
      document.head.appendChild(s);
    });
    return tesseract;
  }
  O.leer = async function (base64, mime) {
    O.resultado = ""; O.error = "";
    try {
      const T = await cargarTesseract();
      const r = await T.recognize("data:" + (mime || "image/png") + ";base64," + base64, "spa");
      O.resultado = (r && r.data && r.data.text || "").trim() || " ";
    } catch (e) { O.error = String(e && e.message || e); }
  };
  function recibir(archivo) {
    if (!archivo || !/^image\//.test(archivo.type)) return false;
    const lector = new FileReader();
    lector.onload = () => {
      const url = String(lector.result || "");
      O.recibida = { nombre: archivo.name || "comprobante.png", mime: archivo.type, base64: url.substring(url.indexOf(",") + 1) };
    };
    lector.readAsDataURL(archivo);
    return true;
  }
  document.addEventListener("paste", (e) => {
    if (!escuchando || !e.clipboardData) return;
    for (const it of e.clipboardData.items) if (it.kind === "file" && recibir(it.getAsFile())) { e.preventDefault(); return; }
  });
  document.addEventListener("dragover", (e) => { if (escuchando) e.preventDefault(); });
  document.addEventListener("drop", (e) => {
    if (!escuchando) return;
    e.preventDefault();
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    recibir(f);
  });
  O.escuchar = (activo) => { escuchando = !!activo; if (!activo) O.recibida = null; };
})();
