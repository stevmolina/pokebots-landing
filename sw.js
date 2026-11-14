// This replaces the old app's service worker: it clears its caches,
// unregisters itself and sends open tabs to the public landing page.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      for (const client of windows) client.navigate(self.location.origin + "/");
    })(),
  );
});
