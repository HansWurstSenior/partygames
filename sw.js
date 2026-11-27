// Add future releases at the top; keep previous entries for users who skip versions.
const RELEASE_HISTORY=[
  {
    "version": "6.6.9",
    "changes": {
      "de": [
        "Kniffeln: „Große Straße mit Schlagloch“ wird bei aktivierter Option wie alle anderen Kategorien behandelt (inklusive Streichen mit 0) und bei deaktivierter Option nicht als offenes/nächstes Feld gezählt."
      ],
      "en": [
        "Yahtzee: when enabled, “Pothole Large Straight” is treated like any other category (including scratching with 0), and excluded from open/next categories when disabled."
      ]
    }
  },
  {
    "version": "6.6.8",
    "changes": {
      "de": [
        "Schwimmen: In der Spielerleiste im Spielfeld steht nun ein Leerzeichen zwischen der Lebenszahl und dem Rettungsring (z. B. „2 🛟“)."
      ],
      "en": [
        "Thirty-One: added a space between the life count and the life-ring icon in the in-game player strip (e.g. “2 🛟”)."
      ]
    }
  },
  {
    "version": "6.6.7",
    "changes": {
      "de": [
        "Schwimmen (Pass-and-Play): Gewählte Spieleranzahl (2–6) und Mensch/KI-Auswahl bleiben dauerhaft gespeichert und werden nicht mehr auf 5 Spieler bzw. Mensch zurückgesetzt."
      ],
      "en": [
        "Thirty-One (Pass-and-Play): selected player count (2–6) and Human/AI settings now persist across sessions instead of resetting to 5 players or Human."
      ]
    }
  },
  {
    "version": "6.6.6",
    "changes": {
      "de": [
        "Kniffeln: Spielregeln für „Große Straße mit Schlagloch“ (35 Punkte) und „Von oben nach unten“ auf Deutsch und Englisch präzisiert.",
        "Manifest: Beschreibung von Partygames auf sieben Spiele aktualisiert."
      ],
      "en": [
        "Yahtzee: clarified rules for “Pothole Large Straight” (35 points) and “Top to bottom” in German and English.",
        "Manifest: updated Partygames description to seven games."
      ]
    }
  },
  {
    "version": "6.6.5",
    "changes": {
      "de": [
        "Kniffeln: Fehler beim Starten des Spielskripts („Invalid regular expression: missing /“) behoben; alle Funktionen aus 6.6.4 bleiben vollständig erhalten."
      ],
      "en": [
        "Yahtzee: fixed the startup syntax error (“Invalid regular expression: missing /”); all features from 6.6.4 remain intact."
      ]
    }
  },
  {
    "version": "6.6.4",
    "changes": {
      "de": [
        "Kniffeln: Neue optionale Kategorie „Große Straße mit Schlagloch“ (35 Punkte bei 4 aufeinanderfolgenden Zahlen mit einer Lücke von 1).",
        "Kniffeln: Neue Spielvariante „Von oben nach unten“ – Einträge oder Streichungen (0) erfolgen streng von oben nach unten."
      ],
      "en": [
        "Yahtzee: added optional “Pothole Large Straight” category (35 points for 4 sequential numbers with a gap of 1).",
        "Yahtzee: added “Top to bottom” option — categories must be scored or scratched with 0 strictly from top to bottom."
      ]
    }
  },
  {
    "version": "6.6.3",
    "changes": {
      "de": [
        "Kniffeln: Im Punkteblock steht in der Bonuszeile jetzt „Oben (Bonus +35 ab 63)“.",
        "Kniffeln (digital): Zwei KI-Schwierigkeitsgrade wählbar – „KI (normal)“ und „KI (stark)“.",
        "Schwimmen: Die Kopfzeile im Spiel zeigt nun wie bei den übrigen Spielen „Spielregeln“ und „Zum Menü“; der doppelte Ton-Button im Spielfeld entfällt."
      ],
      "en": [
        "Yahtzee: the upper bonus row on the score sheet now reads “Upper (Bonus +35 at 63)”.",
        "Yahtzee (digital): two AI difficulty levels can be selected — “AI (normal)” and “AI (strong)”.",
        "Thirty-One: the in-game header now includes “Rules” and “Main menu” like the other games; the duplicate sound button inside the game header has been removed."
      ]
    }
  },
  {
    "version": "6.6.2",
    "changes": {
      "de": [
        "Schwimmen: Zu tauschende Karten bleiben auch im Dark-Design gelb umrahmt statt weiß."
      ],
      "en": [
        "Thirty-One: cards selected to swap keep their yellow highlight border in the dark theme instead of turning white."
      ]
    }
  },
{"version": "6.6.1", "changes": {"de": ["Hochstapler: Bei fehlender, ungültiger oder nicht erreichbarer Zusatzliste bleibt die letzte gültige Liste nutzbar."], "en": ["Impostor: The last valid extra term list remains available when the new list is missing, invalid, or unreachable."]}},
  {
    "version": "6.6.0",
    "changes": {
      "de": [
        "Schwimmen: Sobald der letzte menschliche Spieler ausgeschieden ist, endet die Partie. KI-Gegner spielen nicht gegeneinander weiter.",
        "Kniffeln (digital): KI-Gegner für Spieler 2–8 wählbar. Die KI würfelt sichtbar mit Haltewahl, trägt selbstständig ein und zeigt ihren letzten Zug an. Spieler 1 bleibt immer ein Mensch."
      ],
      "en": [
        "Thirty-One: the match ends as soon as the last human player has been eliminated. AI opponents no longer play on against each other.",
        "Yahtzee (digital): AI opponents can be chosen for players 2–8. The AI rolls visibly, holds dice, scores on its own and shows its last move. Player 1 is always human."
      ]
    }
  },
  {
    "version": "6.5.2",
    "changes": {
      "de": [
        "Werwolf: Der Button „Spielleiter – Verliebte festlegen“ auf dem Einleitungsbildschirm entfällt. Die Verliebten werden im Amor-Schritt des Nachtablaufs festgelegt."
      ],
      "en": [
        "Werewolf: the “Moderator – set lovers” button on the intro screen has been removed. The lovers are set in the Cupid step of the night flow."
      ]
    }
  },
  {
    "version": "6.5.1",
    "changes": {
      "de": [
        "Werwolf: Heil- und Gifttrank der Hexe können pro Partie nur je einmal eingesetzt werden. Eingesetzte Tränke sind danach ausgegraut und mit Hinweis markiert.",
        "Werwolf: Wird das Nachtopfer nach dem Heiltrank geändert, wird der Heiltrank wieder zurückgenommen. „Ausscheiden rückgängig“ macht einen dabei eingesetzten Gifttrank oder Heiltrank wieder verfügbar. „Neue Runde – gleiche Namen & Rollen“ startet jetzt direkt mit der Kartenverteilung statt auf der Einstellungsseite zu landen."
      ],
      "en": [
        "Werewolf: the witch’s healing and poison potions can each be used only once per game. Used potions are greyed out and marked with a note.",
        "Werewolf: changing the night victim after choosing the healing potion cancels the healing choice. Undoing an elimination makes a potion used in that night available again. “New round – same names & roles” now starts card dealing directly instead of landing on the setup page."
      ]
    }
  },
  {
    "version": "6.5.0",
    "changes": {
      "de": [
        "Werwolf: Ist die Hexe ausgeschieden, sind Heil- und Gifttrank in der Nacht ausgegraut und nicht mehr wählbar; der Vorlesetext bleibt erhalten.",
        "Werwolf: Neue Spielvariante „Ohne Rollendetail“ mit Erklärung im Start-Bildschirm. Beim Ausscheiden wird nur „Dorfseite“ oder „Werwolf“ aufgedeckt, die genaue Rolle bleibt verborgen."
      ],
      "en": [
        "Werewolf: when the witch has been eliminated, the healing and poison choices at night are greyed out and cannot be selected; the narration stays available.",
        "Werewolf: new game variant “Without role detail” with an explanation on the start screen. Eliminations only reveal “Village team” or “Werewolf”; the exact role stays hidden."
      ]
    }
  },
  {
    "version": "6.4.1",
    "changes": {
      "de": [
        "Werwolf: Der Hinweis zum blinzelnden Mädchen steht jetzt als erster Nachtschritt vor Amor.",
        "Werwolf: Amor-Schritt mit Spielerliste wie bei Werwolf-Opfer und Hexe: zwei Personen antippen, Rollen werden nur der Spielleitung angezeigt."
      ],
      "en": [
        "Werewolf: the note for the Peeking Girl is now the first night step, before Cupid.",
        "Werewolf: the Cupid step uses a player list like the wolf victim and witch steps: tap two people, roles are shown to the moderator only."
      ]
    }
  },
  {
    "version": "6.4.0",
    "changes": {
      "de": [
        "Hochstapler: Begriffsupdate-Modus mit optionaler Zusatzliste hochstapler-begriffe.json (100 neue Begriffe in den fünf bestehenden Kategorien). Die 100 eingebauten Begriffe bleiben unverändert.",
        "Neue Auswahl „Begriffsquelle“ (eingebaut + Zusatz, nur eingebaut, nur Zusatz) und Button „Begriffe aktualisieren“ mit Statusanzeige. Die Liste wird geprüft, offline zwischengespeichert und kann um neue Kategorien erweitert werden.",
        "Werwolf: Scrollposition bleibt bei Stimmeneingabe und Nachtauswahl erhalten."
      ],
      "en": [
        "Impostor: term update mode with an optional extra list hochstapler-begriffe.json (100 new terms across the five existing categories). The 100 built-in terms stay unchanged.",
        "New “Term source” choice (built-in + extra, built-in only, extra only) and an “Update terms” button with status display. The list is validated, stored for offline use and can add new categories.",
        "Werewolf: scroll position is kept while entering votes and night selections."
      ]
    }
  },
  {
    "version": "6.3.6",
    "changes": {
      "de": [
        "Werwolf: Nacht-Reihenfolge als nebeneinanderliegende Tabs mit festem Tab-Leiste und fester Aktionsleiste, damit weniger gescrollt werden muss.",
        "Seherin: Spielerliste mit Rollen und Lebend-/Tot-Status direkt im Seherin-Schritt.",
        "Private Nachtauswahlen werden bei App-Unterbrechung verdeckt und erst nach Spielleitungs-Bestätigung wieder angezeigt."
      ],
      "en": [
        "Werewolf: night order shown as side-by-side tabs with a fixed tab bar and fixed action bar to reduce scrolling.",
        "Seer: player list with roles and alive/dead status directly in the Seer step.",
        "Private night selections are concealed when the app is interrupted and shown again only after moderator confirmation."
      ]
    }
  },
  {
    "version": "6.3.5",
    "changes": {
      "de": [
        "Werwolf: Namen in privaten Spielleitungs-Auswahlen zeigen die zugehörige Rolle, unter anderem bei Nachtopfer, Hexentränken, Verliebten und Ausscheidungsbestätigung.",
        "Dorfübersicht und Abstimmung können Rollen nach ausdrücklicher Spielleitungsbestätigung einblenden; öffentliche Karten und die Rollenverteilung bleiben verdeckt.",
        "Rollen-Einblendung wird bei Unterbrechung oder Wechsel in eine andere Ansicht zurückgesetzt. Rückkehr zur Dorfübersicht im geführten Ablauf korrigiert."
      ],
      "en": [
        "Werewolf: names in private moderator selections include their role, including night victim, witch potions, lovers and elimination confirmation.",
        "Village overview and voting can show roles after explicit moderator confirmation; public cards and initial role distribution remain concealed.",
        "Moderator role revelation resets on interruption or when leaving the view. Fixed returning to the village overview in the guided flow."
      ]
    }
  },
  {
    "version": "6.3.4",
    "changes": {
      "de": [
        "Werwolf: Geführter Spielablauf für die Spielleitung mit Einleitungstext, Nacht-Reihenfolge, Tagesanbruch-Bekanntgabe, Diskussionsrunde sowie Abstimmung und Verbannung in der Dorfversammlung ergänzt."
      ],
      "en": [
        "Werewolf: added a guided moderator flow with opening narration, night turn order, dawn death announcement, discussion phase, and village council voting and banishment."
      ]
    }
  },
  {
    "version": "6.3.3",
    "changes": {
      "de": [
        "Menüsperre nach wiederholtem Öffnen und Schließen der Hochstapler-Regeln behoben; verwaiste Eingabesperren werden nur im freien Hauptmenü aufgehoben.",
        "Zurück-Navigation schließt Netzwerkdiagnose, Match-Statistik und Perudo-Regeln korrekt, bevor eine Spielansicht verlassen wird.",
        "Alte Verlaufsmarker führen beim Neuladen nicht mehr automatisch aus der App. Die Neuerungen aus 6.3.2 bleiben erhalten."
      ],
      "en": [
        "Fixed the menu lock after repeatedly opening and closing Impostor rules; orphaned interaction locks are cleared only on an otherwise unobstructed main menu.",
        "Back navigation closes network diagnostics, match statistics and Perudo rules before leaving a game view.",
        "Old history markers no longer automatically leave the app on reload. Features from 6.3.2 are retained."
      ]
    }
  },
  {
    "version": "6.3.2",
    "changes": {
      "de": [
        "Konfetti-Sieganimation und Fanfare aus Schwimmen auch in Kniffeln, Perudo, Meiern, Secret Hitler und Hochstapler integriert.",
        "Aufklappbaren Runden- und Gesetzesverlauf sowie direkte Revanche-Buttons für Perudo, Meiern und Secret Hitler auf dem Endbildschirm ergänzt."
      ],
      "en": [
        "Integrated the confetti victory animation and fanfare from Thirty-One into Yahtzee, Perudo, Mia, Secret Hitler, and Impostor.",
        "Added collapsible round and policy history plus direct rematch buttons for Perudo, Mia, and Secret Hitler on the end screen."
      ]
    }
  },
  {
    "version": "6.3.1",
    "changes": {
      "de": [
        "Gemeinsame Release-Einträge ab Version 6.1.9 in einem zentralen Template gebündelt statt siebenfach in index.html zu duplizieren.",
        "Übersetzungs-Dictionary für Version 6.3.0 und 6.3.1 vollständig auf Deutsch und Englisch abgeglichen.",
        "Automatische Konsistenzprüfung für Version, Titel, Log-Templates und Dictionary-Abdeckung ergänzt."
      ],
      "en": [
        "Bundled shared release entries from version 6.1.9 onward into a single template instead of duplicating them seven times in index.html.",
        "Aligned the translation dictionary for versions 6.3.0 and 6.3.1 completely across German and English.",
        "Added automated consistency verification for version, title, log templates, and dictionary coverage."
      ]
    }
  },
  {
    "version": "6.3.0",
    "changes": {
      "de": [
        "Alle sieben Spielmodule (Schwimmen, Hochstapler, Werwolf, Secret Hitler, Meiern, Kniffeln, Perudo) auf Version 6.3.0 konsolidiert und eindeutige Rollensymbole für Secret Hitler ergänzt.",
        "Gemeinsame Hilfsfunktionen für HTML-Escaping, Spielerfarben und Fokus-Sicherheit über alle Module vereinheitlicht.",
        "Versionshinweise, Netzwerk-Protokollmeldungen, Manifest und Service-Worker-Cache vollständig auf 6.3.0 abgeglichen."
      ],
      "en": [
        "Consolidated all seven game modules (Thirty-One, Impostor, Werewolf, Secret Hitler, Mia, Yahtzee, Perudo) to version 6.3.0 and added distinct role icons for Liberal, Fascist, and Hitler in Secret Hitler.",
        "Unified shared helpers for HTML escaping, player colors, and focus safety across all modules.",
        "Aligned version labels, network protocol messages, manifest, and service worker cache to 6.3.0."
      ]
    }
  },
  {
    "version": "6.2.3",
    "changes": {
      "de": [
        "Update-Dialog: kurze Vorschau der neuesten Änderungen, vollständige Hinweise über „Mehr anzeigen“.",
        "Aktualisieren, Prüfen und Später bleiben außerhalb des scrollbaren Inhalts sichtbar – auch bei aufgeklapptem Verlauf.",
        "Vollständige Änderungslisten werden erst beim Ausklappen aufgebaut; Deutsch, Englisch und Dark Theme bleiben unterstützt."
      ],
      "en": [
        "Update dialog: short preview of the latest changes, with complete notes under “Show more”.",
        "Update, Check and Later remain outside the scrolling content, including when the history is expanded.",
        "Complete change lists are built only when expanded; German, English and Dark Theme remain supported."
      ]
    }
  },
  {
    "version": "6.2.2",
    "changes": {
      "de": [
        "Perudo: Alle verbliebenen Würfel werden nur einmal am Rundenanfang geworfen und bleiben während der Gebotsfolge unverändert.",
        "Nach der Übergabebestätigung sind Erhöhen, Dudo und optional Calza sofort erreichbar. Eigene Würfel dürfen ohne erneutes Würfeln angesehen werden.",
        "Auflösungen zeigen die ursprünglichen Würfel vor Verlust oder Rückgewinn. Unterbrechungen verdecken private Würfel, ohne Ergebnisse zu ändern.",
        "Reguläres Update von 6.2.1; keine Downgrade- oder Sonderinstallation erforderlich."
      ],
      "en": [
        "Perudo: roll all remaining dice once at the start of the round and keep results unchanged throughout bidding.",
        "After handoff confirmation, raise, Dudo and optional Calza are immediately available. View your own dice without rerolling.",
        "Showdowns display the original dice before losses or recovery. Interruptions conceal private dice without changing results.",
        "Regular update from 6.2.1; no downgrade or special installation required."
      ]
    }
  },
  {
    "version": "6.2.1",
    "changes": {
      "de": [
        "Übersetzung verarbeitet DOM-Änderungen inkrementell und bündelt Namensabfragen je Durchlauf; vollständiger Sprachwechsel bleibt synchron möglich.",
        "Spielvorbereitung erstellt Spielerzeilen in einem Durchlauf; Tab- und Bildschirmnavigation prüfen Ziele und vermeiden unnötige Zustandsänderungen.",
        "Service Worker in klar abgegrenzte Funktionen aufgeteilt: begrenzte Wiederholungen, release-sichere manuelle Aktualisierung, Offline-Fallback und nachträgliches Caching optionaler Dateien.",
        "Öffentliche Aufrufe, DOM-IDs, Speicherformate und Spielregeln beibehalten; keine neuen Laufzeitabhängigkeiten."
      ],
      "en": [
        "Localization handles DOM changes incrementally and collects player names once per pass; full language switches remain synchronous.",
        "Player setup builds rows in one pass; tab and screen navigation validate targets and avoid redundant state changes.",
        "Refactored the service worker into clear functions: bounded retries, release-safe manual refresh, offline fallback and caching recovered optional assets.",
        "Kept public calls, DOM IDs, stored formats and game rules; no new runtime dependencies."
      ]
    }
  },
  {
    "version": "6.2.0",
    "changes": {
      "de": [
        "Farbige Spielernamen in allen Spielen: Hochstapler, Secret Hitler, Schwimmen und Kniffeln zeigen nun wie Werwolf, Meiern und Perudo feste Spielerfarben in Vorbereitung, Spielansicht und Auswertung.",
        "Namensgedächtnis geprüft und abgesichert: Eingegebene Spielernamen bleiben in allen sieben Partyspielen über Sitzungen hinweg gespeichert; versehentlich geleerte Felder fallen beim Neuladen sauber auf Standardnamen zurück."
      ],
      "en": [
        "Colored player names across all games: Impostor, Secret Hitler, Thirty-One, and Yahtzee now display distinct player colors in setup, gameplay, and results just like Werewolf, Mia, and Perudo.",
        "Name memory verified and hardened: entered player names persist across sessions in all seven party games, while accidentally cleared fields safely fall back to default names on reload."
      ]
    }
  },
  {
    "version": "6.1.9",
    "changes": {
      "de": [
        "Schwimmen wieder erreichbar: ein zu früh geschlossener Menücontainer bei Perudo wurde korrigiert. Lokale und Online-Vorbereitung sowie Spielfeld liegen wieder im App-Rahmen.",
        "Perudo korrekt in das gemeinsame Panel-Raster eingeordnet; Installation und Versionszeile wieder Teil des Hauptmenüs.",
        "Wirkungslosen Sichtbarkeits-Workaround entfernt. Ungültige Bildschirmziele werden zurückgewiesen, ohne die aktuelle Ansicht zu verstecken.",
        "Struktur- und Browserprüfungen für beide Schwimmen-Einstiege ergänzt."
      ],
      "en": [
        "Thirty-One is accessible again: corrected a prematurely closed menu container near Perudo. Local and online setup and the table are back inside the app frame.",
        "Restored Perudo to the shared panel grid and kept installation and version information inside the main menu.",
        "Removed an ineffective visibility workaround. Invalid screen targets are rejected without hiding the current view.",
        "Added structural and browser checks for both Thirty-One entry points."
      ]
    }
  },
  {
    "version": "6.1.8",
    "changes": {
      "de": [
        "Sprach- und Titelanzeige: Verweise auf „Sieben Partyspiele“ / „Seven party games“ beim Lokalisieren und Sprachwechsel vereinheitlicht.",
        "Schwimmen-Navigation: Sichtbarkeits- und Layout-Absicherung für die Setup-Ansichten ergänzt."
      ],
      "en": [
        "Localization & title: unified references to “Seven party games” / “Sieben Partyspiele” during language switches and localization.",
        "Thirty-One navigation: added visibility and layout safeguards for the setup screens."
      ]
    }
  },
  {
    "version": "6.1.7",
    "changes": {
      "de": [
        "Code-Bereinigung: Doppeltes Hochstapler-Regelskript sowie ungenutzten Modus-Handler in Kniffeln entfernt.",
        "Stabilität: Fokus-Aufrufe nach Ansichts- und Renderwechseln abgesichert und Versions-/Spielbeschreibungen vereinheitlicht."
      ],
      "en": [
        "Code cleanup: removed duplicate Impostor rules script and unused mode handler in Yahtzee.",
        "Stability: guarded focus calls after view and render transitions and unified version and game descriptions."
      ]
    }
  },
  {
    "version": "6.1.6",
    "changes": {
      "de": [
        "Meiern: 2-Würfel-Zitteranimation beim Würfeln bei jedem Zug zuverlässig ausgelöst.",
        "Perudo: Dudo und Calza nach dem Würfeln für alle Spieler deaktiviert.",
        "Werwolf: Farbige Spielernamen und Akzentfärbungen ergänzt."
      ],
      "en": [
        "Mia: ensured the 2-die wobble animation triggers reliably on every roll.",
        "Perudo: disabled Dudo and Calza after rolling for all players.",
        "Werewolf: added colored player names and accent styling."
      ]
    }
  },
  {
    "version": "6.1.5",
    "changes": {
      "de": [
        "Meiern: Farbige Spielerkarten und Würfel wie in Perudo ergänzt sowie „Anzweifeln“ nach dem Würfeln deaktiviert."
      ],
      "en": [
        "Mia: added colored player cards and dice like Perudo and disabled Challenge after rolling."
      ]
    }
  },
  {
    "version": "6.1.4",
    "changes": {
      "de": [
        "Meiern: Direkte Ansage-Auswahl auf demselben Screen wie die Würfel (ohne Extra-Zwischenschritt) und 2-Würfel-Animation wie in Perudo."
      ],
      "en": [
        "Mia: integrated bid buttons directly on the dice screen (skipping the extra cover step) with the 2-die wobble animation like Perudo."
      ]
    }
  },
  {
    "version": "6.1.3",
    "changes": {
      "de": [
        "Perudo: Weiter-Button auf dem Übergabe-Screen repariert; Würfel zittern beim Würfeln und bleiben bis zum Tippen auf „Würfel aufdecken“ verdeckt.",
        "Meiern: Zitteranimation beim Würfeln ergänzt und gefallene Würfel bis zum Tippen auf „Würfel aufdecken“ verdeckt gehalten."
      ],
      "en": [
        "Perudo: fixed Continue button on handoff screen; dice wobble while rolling and stay hidden until tapping “Reveal dice”.",
        "Mia: added dice wobble animation while rolling and kept rolled dice hidden until tapping “Reveal dice”."
      ]
    }
  },
  {
    "version": "6.1.2",
    "changes": {
      "de": [
        "Perudo: Weiter-Button auf dem Übergabe-Bildschirm repariert.",
        "Meiern: Würfelbecher entfernt und durch wackelnde Würfel-Slots sowie den Übergabe-Bildschirm mit vorheriger Ansage und Schüttelsperre wie in Perudo ersetzt."
      ],
      "en": [
        "Perudo: fixed the Continue button on the handoff screen.",
        "Mia: removed the cup and adopted the wobbling dice slots and handoff screen with previous bid and shake lock from Perudo."
      ]
    }
  },
  {
    "version": "6.1.1",
    "changes": {
      "de": [
        "Perudo: Übergabe-Bildschirm mit vorheriger Ansage und Schüttelsperre ergänzt, damit beim Weitergeben des Smartphones kein versehentlicher Wurf ausgelöst wird."
      ],
      "en": [
        "Perudo: added a handoff screen showing the previous bid with shake-to-roll locked until the next player taps Continue."
      ]
    }
  },
  {
    "version": "6.1.0",
    "changes": {
      "de": [
        "Perudo: Würfelbecher entfernt, Kniffeln-Würfelreihe mit farbigen Würfeln, längerer Zitteranimation und Schüttel-Sensorik übernommen."
      ],
      "en": [
        "Perudo: removed cups and adopted Yahtzee's top dice-row rolling mechanic with colored dice, longer wobble animation, and shake-to-roll support."
      ]
    }
  },
  {
    "version": "6.0.3",
    "changes": {
      "de": [
        "Namensgedächtnis: Eingetippte Spielernamen werden nun auch bei Perudo sowie den weiteren Partyspielen dauerhaft gespeichert."
      ],
      "en": [
        "Name memory: entered player names are now persisted across sessions in Perudo and the remaining party games as well."
      ]
    }
  },
  {
    "version": "6.0.2",
    "changes": {
      "de": [
        "Perudo: Der Name des aktiven Spielers wird nun gebogen als Gravur auf dem farbigen Würfelbecher angezeigt."
      ],
      "en": [
        "Perudo: the active player's name is now engraved along a curve on their colored dice cup."
      ]
    }
  },
  {
    "version": "6.0.1",
    "changes": {
      "de": [
        "Perudo: Doppelte Würfelreihe entfernt, Würfel in 3er-/2er-Gruppen im dunklen Becher-Schatten angeordnet (Becher leicht versetzt) und Wurf beim Anheben des Bechers ausgelöst."
      ],
      "en": [
        "Perudo: removed duplicate dice row, clustered dice in 3/2 rows inside the dark cup shadow with cup slightly offset, and rolled dice when lifting the cup."
      ]
    }
  },
  {
    "version": "6.0.0",
    "changes": {
      "de": [
        "Neues Spiel Perudo (2–6 Spieler): farbige Würfelbecher und Würfel, Becheranimation + Würfelreihe sowie Dudo, Palifico und Calza."
      ],
      "en": [
        "New game Perudo (2–6 players): colored cups and dice, cup animation + dice row, plus Dudo, Palifico and Calza."
      ]
    }
  },
  {
    "version": "5.9.9",
    "changes": {
      "de": [
        "Kniffeln: Im Kniffel-Block steht nach Auswahl des Folge-Kniffel-Bonus in der Standardregel (+100 Pkt. & Feld streichen) bei anderen Feldern nur noch „0 (Streichen)“ zur Auswahl."
      ],
      "en": [
        "Yahtzee: on the score sheet, after adding an extra Yahtzee bonus under the default rule (+100 pts & scratch box), other categories only offer “0 (Scratch)”."
      ]
    }
  },
  {
    "version": "5.9.8",
    "changes": {
      "de": [
        "Namenseingabe: Zusätzlichen „Ändern“-Button in allen Spielen entfernt; beim Antippen eines Namensfelds wird überall direkt der komplette Name markiert."
      ],
      "en": [
        "Name inputs: removed the extra “Edit” button across all games; focusing any player name field now automatically selects the entire name for easy overwriting."
      ]
    }
  },
  {
    "version": "5.9.7",
    "changes": {
      "de": [
        "Hauptmenü: Dark-Mode-Stil der Spiel-Buttons einheitlich für alle sechs Spiele auf dunkle Flächen und helle Schrift gesetzt."
      ],
      "en": [
        "Main menu: unified dark-mode button styling across all six games with dark surfaces and light text."
      ]
    }
  },
  {
    "version": "5.9.6",
    "changes": {
      "de": [
        "Hauptmenü: Dark-Mode-Darstellung der beiden Kniffeln-Buttons zuverlässig auf dunkle Flächen und helle Schrift umgestellt."
      ],
      "en": [
        "Main menu: reliably applied dark styling and light text to both Yahtzee mode buttons in dark mode."
      ]
    }
  },
  {
    "version": "5.9.5",
    "changes": {
      "de": [
        "Kniffeln: Korrekturfunktion („Letzten Eintrag korrigieren“) ergänzt, um versehentliche Feld- oder Punkteinträge rückgängig zu machen.",
        "Hauptmenü: Kniffeln-Auswahlbuttons im Dark-Mode an das dunkle Design angeglichen."
      ],
      "en": [
        "Yahtzee: added undo correction (“Undo last entry”) to revert accidental category or score entries.",
        "Main menu: styled Yahtzee mode buttons consistently in dark mode."
      ]
    }
  },
  {
    "version": "5.9.4",
    "changes": {
      "de": [
        "Kniffeln: CSV-Export und CSV-Import für beide Spielvarianten ergänzt, um gespielte Runden zu sichern oder unterbrochene Partien fortzusetzen."
      ],
      "en": [
        "Yahtzee: added CSV export and import for both modes to save completed rounds or resume interrupted games."
      ]
    }
  },
  {
    "version": "5.9.3",
    "changes": {
      "de": [
        "Kniffeln: Regel „+100 Pkt. & Feld streichen (0)“ als Standard bei beiden Spielvarianten gesetzt (weitere Varianten bleiben vor Spielstart wählbar)."
      ],
      "en": [
        "Yahtzee: set “+100 pts & scratch box (0)” as default for both modes (other options remain selectable before game start)."
      ]
    }
  },
  {
    "version": "5.9.2",
    "changes": {
      "de": [
        "Kniffeln: Vor Spielstart wählbare Sonderregel für mehrere Kniffel ergänzt (Joker + 100 Pkt., +50 Pkt. & freies Feld oder ohne Zusatzbonus)."
      ],
      "en": [
        "Yahtzee: added pre-game option for multiple-Yahtzee rules (Joker + 100 pts, +50 pts & any open box, or no extra bonus)."
      ]
    }
  },
  {
    "version": "5.9.1",
    "changes": {
      "de": [
        "Kniffeln: Beide Spielvarianten („Komplett digital spielen“ und „Eigener Würfelbecher / Kniffel-Block“) stehen nun direkt im Hauptmenü zur Auswahl."
      ],
      "en": [
        "Yahtzee: both modes (“Full digital” and “Own dice cup / Score sheet”) are now selectable directly from the main menu."
      ]
    }
  },
  {
    "version": "5.9.0",
    "changes": {
      "de": [
        "Kniffeln-Start repariert; Würfelbeschriftung vereinfacht und doppelte Start-Ereignisse entfernt.",
        "Initialisierungsdiagnose verhindert bei fehlerhaftem Spielskript einen stummen Menüausfall.",
        "Kniffeln-Wertung und Joker-Pflichtfelder korrigiert; manuelle Eingaben, Bonusbuchungen und veraltete Bedienelemente abgesichert.",
        "Würfelbutton funktioniert ohne Sensorfreigabe; Schütteln ist optional und in Dialogen sowie im Hintergrund pausiert.",
        "Service-Worker-Downloads inklusive Antwortinhalt zeitlich begrenzt; alte Caches bei mehreren offenen Ansichten erhalten.",
        "Ausführbare Release-Prüfung für Syntax, Versionen, Kniffeln-Initialisierung und Wertungsregressionen ergänzt."
      ],
      "en": [
        "Repaired Yahtzee startup; simplified dice labels and removed duplicate start events.",
        "Initialization diagnostics prevent silent menu failure when the game script is broken.",
        "Corrected Yahtzee scoring and mandatory Joker boxes; hardened manual entries, bonus recording and stale controls.",
        "Roll button works without motion permission; shaking is optional and paused in dialogs and in the background.",
        "Service worker downloads time out including response bodies; old caches are retained when multiple pages are open.",
        "Added an executable release check covering syntax, versions, Yahtzee initialization and scoring regressions."
      ]
    }
  },
  {
    "version": "5.8.7",
    "changes": {
      "de": [
        "Kniffeln: Im Modus „Nur Kniffel-Block“ werden Punkte jetzt per Dropdown-Menü mit den jeweils gültigen Punktzahlen statt per Freitextfeld ausgewählt.",
        "Code bereinigt: versionsgebundene interne Bezeichner entfernt."
      ],
      "en": [
        "Yahtzee: score-sheet mode now uses dropdown menus with only valid scores per category instead of free-text inputs.",
        "Code cleanup: removed version-suffixed internal identifiers."
      ]
    }
  },
  {
    "version": "5.8.5",
    "changes": {
      "de": [
        "Service Worker: Mehrfacher Abgleich der Zielversion bei CDN-Verzögerung, um kurzzeitige Mismatch-Fehler zu vermeiden."
      ],
      "en": [
        "Service worker: retried release version check during CDN propagation to avoid transient mismatch errors."
      ]
    }
  },
  {
    "version": "5.8.3",
    "changes": {
      "de": [
        "Kniffeln: Direkte Inline-Tab-Umschaltung und Sichtbarkeitsabsicherung im Hauptmenü ergänzt."
      ],
      "en": [
        "Yahtzee: added direct inline tab switching and visibility safeguard in the main menu."
      ]
    }
  },
  {
    "version": "5.8.2",
    "changes": {
      "de": [
        "Kniffeln: Tab-Auswahl und Startbutton durch Capture-Event-Delegation und sauberes Attribut-Handling abgesichert."
      ],
      "en": [
        "Yahtzee: hardened tab switching and start button with capture event delegation and clean attribute handling."
      ]
    }
  },
  {
    "version": "5.8.1",
    "changes": {
      "de": [
        "Kniffeln: Startbutton im Hauptmenü repariert, sodass sich das Spiel auf allen Geräten zuverlässig öffnen lässt."
      ],
      "en": [
        "Yahtzee: fixed the main menu start button so the game opens reliably on all devices."
      ]
    }
  },
  {
    "version": "5.8.0",
    "changes": {
      "de": [
        "Kniffeln (Yahtzee) als sechstes Partyspiel ergänzt (1–8 Spieler).",
        "Zwei Modi: Komplett digital mit 5 Würfeln (inklusive Halten, Schütteln und Vibration) oder als reiner Kniffel-Block für echte Würfel.",
        "Standardregeln mit 63er-Bonus, Kniffel-Bonus (+100) und Joker-Regel auf Deutsch und Englisch."
      ],
      "en": [
        "Added Yahtzee (Kniffeln) as the sixth party game (1–8 players).",
        "Two modes: Full digital with 5 dice (including hold, shake-to-roll and vibration) or score-sheet-only mode for physical dice.",
        "Standard rules with 63 upper bonus, Yahtzee bonus (+100) and Joker rule in German and English."
      ]
    }
  },
  {
    "version": "5.7.3",
    "changes": {
      "de": [
        "Meiern: Übergabebildschirm entfernt – nach der Ansage sieht die nächste Person direkt die Ansage und den verdeckten Becher.",
        "Haptisches Würfeln: Becher lässt sich durch Schütteln des Smartphones auslösen; Vibration begleitet das Würfeln und Aufdecken."
      ],
      "en": [
        "Mia: removed the handoff screen — after a bid, the next player immediately sees the bid and covered cup.",
        "Haptic rolling: shake your smartphone to roll the cup, with vibration feedback during rolling and reveal."
      ]
    }
  },
  {
    "version": "5.7.2",
    "changes": {
      "de": [
        "Meiern: kompakter Übergabebildschirm ohne dekorativen Würfelbecher; verdeckte Bereitschaftsbestätigung bleibt erhalten.",
        "Optionaler Trinkmodus (18+) statt Leben: eine Trinkaufforderung pro verlorener Runde, auch bei Mäxchen; kein Ausscheiden.",
        "Moduswahl, Ergebnisanzeige und Spielregeln vollständig auf Deutsch und Englisch ergänzt.",
        "README durch eine versionsunabhängige Projektbeschreibung mit kurzen Spielporträts ersetzt."
      ],
      "en": [
        "Mia: compact handoff screen without the decorative dice cup; private readiness confirmation remains.",
        "Optional drinking mode (18+) instead of lives: one drinking prompt per round lost, including Mia; no elimination.",
        "Mode selection, results and rules fully updated in German and English.",
        "README replaced with a version-independent project description and short game summaries."
      ]
    }
  },
  {
    "version": "5.7.1",
    "changes": {
      "de": [
        "Meiern nutzt in der Spielauswahl nun dieselbe Icon-Breite wie die übrigen Spiele, sodass in der zweiten Zeile Platz für drei weitere Spiele bleibt."
      ],
      "en": [
        "Mia now uses the same single-column tab width as the other games, leaving room for three more games in the second row."
      ]
    }
  },
  {
    "version": "5.7.0",
    "changes": {
      "de": [
        "Meiern (Mäxchen) als fünftes Partyspiel: offline an einem Gerät für 2–12 Menschen.",
        "Animierter Würfelbecher, private Würfelansicht, steigende Ansagen, Blindweitergabe und Anzweifeln mit automatischer Lebenswertung.",
        "Neue Spielauswahl mit zweiter Zeile auf mobilen Geräten; vollständige deutsche und englische Mia-Anleitung.",
        "Versionsanzeige im Hauptmenü wird nun aus derselben Metadaten-Version wie die Update-Glocke erzeugt."
      ],
      "en": [
        "Mia (Meiern / Mäxchen) joins as the fifth party game: offline on one device for 2–12 human players.",
        "Animated dice cup, private rolls, rising bids, blind passes and challenges with automatic life tracking.",
        "New game selector with a second row on mobile; complete German and English Mia rules.",
        "Main-menu version now uses the same version metadata as the update bell."
      ]
    }
  },
  {
    "version": "5.5.6",
    "changes": {
      "de": [
        "Desktop-Ansicht ab 900 Pixel Breite deutlich verbreitert; Menü, Einstellungen und Regeln nutzen den verfügbaren Platz besser.",
        "Größere Menü- und Aktionsflächen sowie klare Hover-Rückmeldung für Maus und Trackpad.",
        "Updateprüfung, Sprachwahl, Farbschema und Android-Zurück bleiben unverändert."
      ],
      "en": [
        "Desktop layout widens noticeably from 900 pixels; menu, setup and rules use available space better.",
        "Larger menu and action targets plus clear hover feedback for mouse and trackpad.",
        "Update checks, language selection, color scheme and Android Back remain unchanged."
      ]
    }
  },
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
const BASE = new URL(self.registration.scope);
const CACHE_PREFIX = 'partygames-shell-' + encodeURIComponent(BASE.pathname) + '-';
const CACHE = CACHE_PREFIX + RELEASE.version;
const SHELL = [
    './index.html', './update.html', './manifest.webmanifest',
    './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'
];
const TERMS_URL = new URL('./hochstapler-begriffe.json', BASE).href;
const TERMS_PATH = new URL(TERMS_URL).pathname;
const DATA_CACHE = 'partygames-data-' + encodeURIComponent(BASE.pathname);
const ENTRY = new URL('./index.html', BASE).href;
const ENTRY_PATH = new URL(ENTRY).pathname;
const ASSET_URLS = new Set(SHELL.slice(1).map(path => new URL(path, BASE).href));
const INSTALL_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1500;

function belongsToApp(url) {
    return url.origin === BASE.origin && url.pathname.startsWith(BASE.pathname);
}

function applicationVersion(html) {
    const tags = html.match(/<meta\b[^>]*>/gi) || [];
    const versionTag = tags.find(tag => /\bname\s*=\s*["']application-version["']/i.test(tag));
    return versionTag?.match(/\bcontent\s*=\s*["']([^"']+)["']/i)?.[1] || '';
}

async function releaseFetch(path, timeout) {
    const url = new URL(path, BASE);
    url.searchParams.set('pg-release', RELEASE.version);
    url.searchParams.set('pg-request', Date.now().toString(36) + '-' + Math.random().toString(36).slice(2));
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { cache: 'no-store', signal: controller.signal });
        if (!response.ok) throw new Error('HTTP_' + response.status);
        const body = await response.arrayBuffer();
        const headers = new Headers(response.headers);
        headers.delete('content-encoding');
        headers.delete('content-length');
        return new Response(body, { status: response.status, statusText: response.statusText, headers });
    } finally {
        clearTimeout(timer);
    }
}

async function fetchMatchingEntry() {
    let lastError;
    for (let attempt = 0; attempt < INSTALL_ATTEMPTS; attempt++) {
        try {
            const response = await releaseFetch('./index.html', 20000);
            if (applicationVersion(await response.clone().text()) !== RELEASE.version) {
                throw new Error('RELEASE_MISMATCH');
            }
            return response;
        } catch (error) {
            lastError = error;
            if (attempt + 1 < INSTALL_ATTEMPTS) {
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
            }
        }
    }
    throw lastError;
}

async function notifyInstallationError(error) {
    const code = error?.message === 'RELEASE_MISMATCH' ? 'RELEASE_MISMATCH' : 'INSTALL_FAILED';
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clients) {
        try {
            if (belongsToApp(new URL(client.url))) {
                client.postMessage({ type: 'PARTYGAMES_INSTALL_ERROR', version: RELEASE.version, code });
            }
        } catch (notificationError) {
            console.warn('Unable to notify an app window:', notificationError);
        }
    }
}

async function installRelease() {
    try {
        const response = await fetchMatchingEntry();
        const cache = await caches.open(CACHE);
        await cache.put(ENTRY, response);
        // Optional assets must not prevent installing the validated application shell.
        await Promise.allSettled(SHELL.slice(1).map(async path => {
            const asset = await releaseFetch(path, 5000);
            await cache.put(new URL(path, BASE).href, asset);
        }));
        await Promise.allSettled([refreshTerms(5000)]);
    } catch (error) {
        try { await notifyInstallationError(error); } catch (notificationError) {
            console.warn('Installation error notification failed:', notificationError);
        }
        throw error;
    }
}

// Optional content file: network first so edits appear quickly, saved copy when offline. It is not part of the versioned shell.
// Keep this parser aligned with the app; the release check compares both copies.
const EXTRA_MAX_CHARS=200000,EXTRA_MAX_CATS=30,EXTRA_MAX_TERMS=2000,EXTRA_TERM_MAX=40;
const BAD_KEYS=new Set(['__proto__','constructor','prototype','Alle Kategorien']);
function cleanTerm(v){return typeof v==='string'&&v.trim().length>=1&&v.trim().length<=EXTRA_TERM_MAX&&!/[\u0000-\u001f\u007f<>|]/.test(v)?v.trim().replace(/\s+/g,' '):''}
function parseExtra(text){
 if(typeof text!=='string'||text.length>EXTRA_MAX_CHARS)throw new Error('size');
 let data;try{data=JSON.parse(text)}catch(_){throw new Error('json')}
 if(!data||typeof data!=='object'||Array.isArray(data)||data.format!==1||!data.kategorien||typeof data.kategorien!=='object'||Array.isArray(data.kategorien))throw new Error('format');
 const cats=new Map();let count=0,skipped=0;const names=Object.keys(data.kategorien);
 if(names.length>EXTRA_MAX_CATS)throw new Error('format');
 for(const name of names){
  const label=typeof name==='string'?name.trim():'';
  if(!label||label.length>40||BAD_KEYS.has(label)||/[\u0000-\u001f\u007f<>|]/.test(label)){skipped++;continue}
  const list=data.kategorien[name];if(!Array.isArray(list)||list.length>EXTRA_MAX_TERMS)throw new Error('format');
  const entry=cats.get(label)||{de:[],en:[]},seenDe=new Set(entry.de.map(w=>w.toLocaleLowerCase('de'))),seenEn=new Set(entry.en.map(w=>w.toLocaleLowerCase('en')));
  for(const item of list){
   const de=cleanTerm(typeof item==='string'?item:item?.de),en=cleanTerm(typeof item==='string'?item:(item?.en??item?.de));
   if(!de||!en){skipped++;continue}
   const kd=de.toLocaleLowerCase('de'),ke=en.toLocaleLowerCase('en');
   if(seenDe.has(kd)||seenEn.has(ke)){skipped++;continue}
   seenDe.add(kd);seenEn.add(ke);entry.de.push(de);entry.en.push(en);count++
  }
  if(entry.de.length)cats.set(label,entry)
 }
 if(!count)throw new Error('empty');
 return {cats,count,stand:typeof data.stand==='string'&&/^[0-9A-Za-z .:\-]{1,30}$/.test(data.stand)?data.stand:'',skipped};
}

async function refreshTerms(timeout) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(new Request(TERMS_URL, { cache: 'no-store' }), { signal: controller.signal });
        if (!response.ok) return response;
        const text = await response.text();
        try { parseExtra(text); }
        catch (_) { return new Response('Invalid terms', { status: 502 }); }
        const valid = new Response(text, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        try {
            const cache = await caches.open(DATA_CACHE);
            await cache.put(TERMS_URL, valid.clone());
        } catch (error) { console.warn('Terms could not be cached:', error); }
        return valid;
    } finally {
        clearTimeout(timer);
    }
}

async function termsResponse() {
    let failure;
    try {
        const response = await refreshTerms(8000);
        if (response.ok) return response;
        failure = response;
    } catch (_) {
        failure = new Response('{}', { status: 504, statusText: 'Terms unavailable' });
    }
    try {
        const cache = await caches.open(DATA_CACHE);
        const saved = await cache.match(TERMS_URL);
        if (saved?.ok) {
            const text = await saved.text();
            parseExtra(text);
            return new Response(text, { headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Partygames-Terms': 'saved'
            } });
        }
    } catch (_) { /* Ignore unavailable cache or invalid entries from an earlier release. */ }
    return failure;
}

async function activateRelease() {
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const appWindows = clients.filter(client => {
        try { return belongsToApp(new URL(client.url)); } catch (_) { return false; }
    });
    // Other open windows may still need their old release cache.
    if (appWindows.length > 1) return;
    const keys = await caches.keys();
    await Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE)
        .map(key => caches.delete(key)));
}

async function cachedAsset(request) {
    const cache = await caches.open(CACHE);
    const saved = await cache.match(request);
    if (saved) return saved;
    const response = await fetch(request);
    if (response.ok) {
        try { await cache.put(request, response.clone()); } catch (error) {
            console.warn('Optional asset could not be cached:', error);
        }
    }
    return response;
}

async function applicationNavigation(request, forceRefresh) {
    const cache = await caches.open(CACHE);
    const saved = await cache.match(ENTRY);
    if (saved && !forceRefresh) return saved;
    try {
        const response = forceRefresh
            ? await releaseFetch('./index.html', 20000)
            : await fetch(request);
        const sameRelease = applicationVersion(await response.clone().text()) === RELEASE.version;
        // A manual refresh must not silently mix a new HTML release with the old shell.
        if (!sameRelease && saved) return saved;
        if (sameRelease && response.ok) {
            try { await cache.put(ENTRY, response.clone()); } catch (error) {
                console.warn('Application refresh could not be cached:', error);
            }
        }
        return response;
    } catch (error) {
        if (saved) return saved;
        throw error;
    }
}

self.addEventListener('install', event => event.waitUntil(installRelease()));
self.addEventListener('activate', event => event.waitUntil(activateRelease()));
self.addEventListener('message', event => {
    if (event.data?.type === 'GET_RELEASE') event.ports?.[0]?.postMessage(RELEASE);
    if (event.data?.type === 'SKIP_WAITING' && (!event.data.version || event.data.version === RELEASE.version)) {
        event.waitUntil(self.skipWaiting());
    }
});
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    if (request.method !== 'GET' || !belongsToApp(url)) return;
    if (request.mode === 'navigate' && (url.pathname === BASE.pathname || url.pathname === ENTRY_PATH)) {
        event.respondWith(applicationNavigation(request, url.searchParams.has('_collection_reload')));
    } else if (url.pathname === TERMS_PATH) {
        event.respondWith(termsResponse());
    } else if (ASSET_URLS.has(url.href)) {
        event.respondWith(cachedAsset(request));
    }
});
