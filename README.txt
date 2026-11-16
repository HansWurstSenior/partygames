Partygames 5.4.8 – PWA

Installation auf GitHub Pages:
1. ZIP entpacken.
2. index.html, manifest.webmanifest, sw.js und den Ordner icons gemeinsam in denselben veröffentlichten Website-Ordner hochladen. Vorhandene index.html ersetzen.
3. Die direkte HTTPS-Adresse der GitHub-Pages-Seite öffnen, einmal laden lassen und dann bei Bedarf erneut öffnen.
4. „Als App installieren“ wählen oder den Installationspunkt im Browsermenü verwenden. Auf iPhone/iPad: Teilen → Zum Home-Bildschirm.

Die relative Konfiguration funktioniert auch in einem GitHub-Pages-Unterordner.
Die HTML-Datei allein genügt für diese PWA nicht. Lokale file:-Aufrufe bieten keine Service-Worker-Installation.

Offline:
Nach erfolgreicher Erstladung werden Oberfläche und eingebettete Spielinhalte lokal zwischengespeichert. Der Schwimmen-Online-Modus benötigt weiter Internet. Laufende Partien werden NICHT wiederhergestellt: Neuladen oder Schließen kann den Spielstand löschen. Der Cache speichert keine geheimen Rollen oder laufenden Partien.

Updates:
Keine automatische Neuladung während einer Partie. Bei zukünftigen Änderungen auch die Cache-Versionsnummer in sw.js erhöhen. Ein neuer Worker wartet normalerweise bis alle alten Tabs/App-Fenster geschlossen sind. Nach vollständigem Schließen und erneutem Öffnen wird er aktiv. Browser können Offline-Daten entfernen.
