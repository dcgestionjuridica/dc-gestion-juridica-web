// V1.4.9: clic suave de la aplicación en el navegador. Volumen de 0 a 100 (60 = el de siempre en Windows).
(function () {
  var ctx = null;
  window.DC_CLIC = function (volumen) {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!ctx) ctx = new AC();
      if (ctx.state === 'suspended') ctx.resume();
      var ganancia = ctx.createGain();
      var v = Math.max(0, Math.min(100, Number(volumen) || 0)) / 100;
      var t = ctx.currentTime;
      ganancia.gain.setValueAtTime(0.0001, t);
      ganancia.gain.exponentialRampToValueAtTime(Math.max(0.0002, 0.35 * v), t + 0.004);
      ganancia.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      var osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1500, t);
      osc.frequency.exponentialRampToValueAtTime(700, t + 0.05);
      osc.connect(ganancia); ganancia.connect(ctx.destination);
      osc.start(t); osc.stop(t + 0.06);
    } catch (e) { /* sin sonido */ }
  };
})();
