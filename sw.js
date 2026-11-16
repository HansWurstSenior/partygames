const CACHE='partygames-shell-5.4.10';
const SHELL=['./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('partygames-shell-')&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url),base=new URL(self.registration.scope);
 if(req.method!=='GET'||url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
 const entry=new URL('./index.html',base).pathname;
 if(req.mode==='navigate'&&(url.pathname===base.pathname||url.pathname===entry)){
  event.respondWith((async()=>{try{const res=await fetch(req);if(res.ok){const c=await caches.open(CACHE);await c.put(new URL('./index.html',base).href,res.clone())}return res}catch(e){const cached=await caches.match(new URL('./index.html',base).href);return cached||Response.error()}})());return;
 }
 const assets=SHELL.slice(1).map(p=>new URL(p,base).href);
 if(assets.includes(url.href))event.respondWith(caches.match(req).then(c=>c||fetch(req)));
});