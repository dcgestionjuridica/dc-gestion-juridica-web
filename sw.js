// V1.3.391: avisos al celular. Muestra el aviso y, al tocarlo, abre la página.
self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { texto: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.titulo || "DC Gestión Jurídica", {
    body: d.texto || "", tag: d.etiqueta || undefined, data: { url: d.url || self.registration.scope },
    icon: new URL("icono-192.png", self.registration.scope).href, badge: new URL("icono-192.png", self.registration.scope).href
  }));
});
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((ventanas) => {
    for (const v of ventanas) if (v.url.split("#")[0] === url.split("#")[0] && "focus" in v) { v.navigate && v.navigate(url); return v.focus(); }
    return self.clients.openWindow(url);
  }));
});
