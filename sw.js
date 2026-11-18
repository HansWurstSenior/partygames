// Add future releases at the top; keep previous entries for users who skip versions.
const RELEASE_HISTORY=[
  {
    "version": "5.5.5",
    "changes": {
      "de": [
        "Updateprüfung mit zusätzlichem Versionsabruf vom Server und erneuter Registrierung nach Fehlern.",
        "Herunterladen und Bereitstellen werden bis zum Abschluss geprüft; unvollständige Updates werden als Fehler angezeigt.",
        "Fehlende Icons blockieren kein App-Update mehr. Serverversion und Fehlerhinweise sind in der Glocke sichtbar."
      ],
      "en": [
        "Update checks now also fetch the server version and retry registration after failures.",
        "Downloads and installation are monitored to completion; incomplete updates are reported as errors.",
        "Missing icons no longer block app updates. The bell shows the server version and error information."
      ]
    }
  },
  {
    "version": "5.5.4",
    "changes": {
      "de": [
        "Das gewählte Farbschema Default oder Dark bleibt beim erneuten Öffnen erhalten.",
        "Das gespeicherte Schema wird bereits beim Start angewendet; Sprachwahl und Android-Zurück bleiben unverändert."
      ],
      "en": [
        "The selected Default or Dark color scheme is remembered when reopening the app.",
        "The saved theme is applied on startup; language selection and Android Back remain unchanged."
      ]
    }
  },
  {
    "version": "5.5.3",
    "changes": {
      "de": [
        "Android-Zurück am Anfang des App-Verlaufs wird nicht mehr durch den Beenden-Dialog abgefangen.",
        "Zusätzlichen Beenden-Verlaufseintrag entfernt; vorhandene alte Einträge werden beim Upgrade am Hauptmenü nach Möglichkeit bereinigt.",
        "Der separate Beenden-Button behält seine Rückfrage."
      ],
      "en": [
        "Android Back at the start of the app history is no longer intercepted by the exit dialog.",
        "Removed the extra exit history entry; existing legacy entries are migrated where possible when upgrading at the main menu.",
        "The separate Exit button keeps its confirmation."
      ]
    }
  },
  {
    "version": "5.5.2",
    "changes": {
      "de": [
        "Versionshistorie in sw.js, nach Version gruppiert und auf Deutsch und Englisch.",
        "Die Glocke zeigt beim Update alle hinterlegten Änderungen seit der geöffneten Version.",
        "Der gesamte hinterlegte Versionsverlauf ist auch ohne anstehendes Update einsehbar."
      ],
      "en": [
        "Version history in sw.js, grouped by version in German and English.",
        "Update details show all recorded changes since the currently open version.",
        "The complete recorded version history is available even when no update is pending."
      ]
    }
  },
  {
    "version": "5.5.1",
    "changes": {
      "de": [
        "Drei Menübuttons: Spielregeln, Was ist neu? und Beenden.",
        "Beenden nach Rückfrage; Zurück fragt am Anfang des App-Verlaufs ebenfalls nach.",
        "Bei blockiertem automatischem Schließen wird ein Hinweis zum manuellen Schließen angezeigt."
      ],
      "en": [
        "Three menu buttons: Rules, What’s new and Exit.",
        "Exit after confirmation; Back also asks at the start of the app history.",
        "Manual closing instructions are shown if the browser blocks automatic closing."
      ]
    }
  },
  {
    "version": "5.5.0",
    "changes": {
      "de": [
        "Alle vier Spielanleitungen auf Deutsch und Englisch verständlicher gegliedert.",
        "Schwimmen: Unentschieden bei gleichzeitigem Ausscheiden aller letzten Spieler korrekt angezeigt.",
        "Werwolf: Abbrechen der privaten Rollenansicht repariert; Verliebte nach dem ersten Ausscheiden geschützt einsehbar."
      ],
      "en": [
        "All four game guides restructured for clarity in German and English.",
        "Thirty-One: correctly show a draw when all remaining players are eliminated together.",
        "Werewolf: fixed cancelling private role review; lovers can be viewed privately after the first elimination."
      ]
    }
  },
  {
    "version": "5.4.14",
    "changes": {
      "de": [
        "Update-Glocke mit automatischer und manueller Versionsprüfung.",
        "Änderungshinweise, Offline-Status und Aktualisierung nach Bestätigung."
      ],
      "en": [
        "Update bell with automatic and manual version checks.",
        "Release notes, offline status and updates after confirmation."
      ]
    }
  }
];
const RELEASE={
 version:RELEASE_HISTORY[0].version,
 history:RELEASE_HISTORY,
 // Compatibility summary for update dialogs predating version-history support.
 changes:Object.fromEntries(['de','en'].map(language=>[language,
  RELEASE_HISTORY.filter(entry=>entry.version!=='5.4.14').flatMap(entry=>
   entry.changes[language].map(note=>'Version '+entry.version+': '+note)
  )
 ]))
};
const BASE=new URL(self.registration.scope);
const CACHE='partygames-shell-'+encodeURIComponent(BASE.pathname)+'-'+RELEASE.version;
const SHELL=['./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png'];
const ENTRY=new URL('./index.html',BASE).href;
async function releaseFetch(path,timeout){
 const url=new URL(path,BASE);url.searchParams.set('pg-release',RELEASE.version);url.searchParams.set('pg-request',Date.now().toString(36));
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeout);
 try{const response=await fetch(url,{cache:'no-store',signal:controller.signal});if(!response.ok)throw Error('HTTP_'+response.status);return response}
 finally{clearTimeout(timer)}
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 try{
  const response=await releaseFetch('./index.html',20000),html=await response.clone().text();
  const meta=(html.match(/<meta\b[^>]*>/gi)||[]).find(tag=>/name=["']application-version["']/i.test(tag));
  const found=meta?.match(/content=["']([^"']+)["']/i)?.[1];
  if(found!==RELEASE.version)throw Error('RELEASE_MISMATCH');
  const cache=await caches.open(CACHE);await cache.put(ENTRY,response);
  // The HTML contains the application. Branding assets are optional, not an update prerequisite.
  await Promise.allSettled(SHELL.slice(1).map(async path=>{
   const response=await releaseFetch(path,5000);await cache.put(new URL(path,BASE).href,response);
  }));
 }catch(error){
  const code=error.message==='RELEASE_MISMATCH'?'RELEASE_MISMATCH':'INSTALL_FAILED';
  try{for(const client of await self.clients.matchAll({type:'window',includeUncontrolled:true})){
   if(new URL(client.url).origin===BASE.origin&&new URL(client.url).pathname.startsWith(BASE.pathname))client.postMessage({type:'PARTYGAMES_INSTALL_ERROR',version:RELEASE.version,code});
  }}catch(ignored){}
  throw error;
 }
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
