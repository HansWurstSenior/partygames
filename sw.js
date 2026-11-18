const RELEASE={"version": "5.5.0", "changes": {"de": ["Spielanleitungen aller vier Spiele auf Deutsch und Englisch neu gegliedert und verständlich überarbeitet.", "Schwimmen: Gleichzeitiges Ausscheiden aller letzten Spieler endet korrekt unentschieden.", "Werwolf: Abbrechen der privaten Rollenansicht korrigiert; Verliebte nach dem ersten Ausscheiden geschützt einsehbar.", "Kartenbeispiele, KI-Gegner mit Zuschaueransicht und Update-Glocke bleiben erhalten."], "en": ["All four game guides restructured and rewritten for clarity in German and English.", "Thirty-One: correctly show a draw when all remaining players are eliminated together.", "Werewolf: fixed cancelling private role review; lovers can be viewed privately after the first elimination.", "Card examples, AI opponents with spectator view and update bell preserved."]}};
const BASE=new URL(self.registration.scope);
const CACHE='partygames-shell-'+encodeURIComponent(BASE.pathname)+'-'+RELEASE.version;
const SHELL=['./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png'];
const ENTRY=new URL('./index.html',BASE).href;
self.addEventListener('install',event=>event.waitUntil((async()=>{
 // Fetch the entire release before writing anything to its cache.
 const responses=await Promise.all(SHELL.map(async path=>{
  const url=new URL(path,BASE).href,res=await fetch(new Request(url,{cache:'no-store'}));
  if(!res.ok)throw Error('Incomplete release: '+path);
  if(path==='./index.html'){
   const html=await res.clone().text();
   const meta=(html.match(/<meta\b[^>]*>/gi)||[]).find(tag=>/name=["']application-version["']/i.test(tag));
   const version=meta?.match(/content=["']([^"']+)["']/i)?.[1];
   if(version!==RELEASE.version)throw Error('Release mismatch');
  }
  return [url,res];
 }));
 const cache=await caches.open(CACHE);await Promise.all(responses.map(([u,r])=>cache.put(u,r)));
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 // Do not delete other tabs' old caches while they may still run old HTML.
 await self.clients.claim();
 const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
 if(windows.filter(c=>new URL(c.url).pathname.startsWith(BASE.pathname)).length<=1){
  const prefix='partygames-shell-'+encodeURIComponent(BASE.pathname)+'-';
  await Promise.all((await caches.keys()).filter(k=>k.startsWith(prefix)&&k!==CACHE).map(k=>caches.delete(k)));
 }
})()));
self.addEventListener('message',event=>{
 if(event.data?.type==='GET_RELEASE')event.ports[0]?.postMessage(RELEASE);
 if(event.data?.type==='SKIP_WAITING'&&(!event.data.version||event.data.version===RELEASE.version))event.waitUntil(self.skipWaiting());
});
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 if(req.mode==='navigate'&&(url.pathname===BASE.pathname||url.pathname===new URL(ENTRY).pathname)){
  event.respondWith((async()=>{const c=await caches.open(CACHE);return await c.match(ENTRY)||fetch(req)})());return;
 }
 if(SHELL.slice(1).some(p=>new URL(p,BASE).href===url.href))event.respondWith((async()=>{const c=await caches.open(CACHE);return await c.match(req)||fetch(req)})());
});
