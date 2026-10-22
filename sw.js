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

// V1.3.397 (pedido de Darío: «que abra en un parpadear de ojos»): los archivos de la aplicación quedan
// guardados en el navegador y la segunda vez abren sin descargarlos. Un solo depósito («dc-app») y una
// sola copia por archivo: al llegar una versión nueva se borra la anterior (nada se acumula).
const DEPOSITO = "dc-app";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== self.location.origin) return;            // Supabase y demás: nunca se tocan
  if (!/\.(wasm|mjs|js|ttf|png|xml|ico)$/.test(u.pathname) || u.pathname.endsWith("/sw.js")) return;
  const conVersion = u.searchParams.has("v");
  e.respondWith(caches.open(DEPOSITO).then(async (c) => {
    const guardado = await c.match(r);
    if (guardado && conVersion) return guardado;            // misma versión: al instante
    const red = fetch(r).then(async (resp) => {
      if (resp.ok && resp.status === 200) {
        for (const k of await c.keys()) if (new URL(k.url).pathname === u.pathname && k.url !== r.url) await c.delete(k);
        await c.put(r, resp.clone());
      }
      return resp;
    });
    if (guardado) { e.waitUntil(red.catch(() => {})); return guardado; }   // sin versión: lo guardado y se renueva por detrás
    return red;
  }));
});
