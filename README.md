# Statische version von fertiggespritzt.de

## Inhalt
1. Warum?
2. Wie?
3. Neue features (+Begründung)
4. Dev/Deploy
5. Zukunft

---
# 1. Warum?
Das Ziel dieses Forks ist es, Vue im Frontend durch
EJS im backend zu ersetzen und so die Seite auch für Personen verfügbar zu
machen welche kein JS ausführen möchten. Das nutzen von Server-rendering
hat noch weitere Forteile:
1. (De)Bloat: VueJs wurde (zum Fork-Zeitpunkt) zum ersetzen von **2** variablen genutzt
2. Latency: Menschen mit schlechtem Netz (wilkommen in Deutschland!) müssen zunächst auf den durch ihr netz sehr langsamen API-call warten.
3. Caching (TBD) und API-traffic: Da die Daten sich nur wenig ändern könnten sie mehrfach verwendet werden und so die API last verringern.
4. Artikel und weitere Features (siehe \#4 und \#5) sind leichter realisiserbar (oder könen dynamische Fallbacks erhalten)

# 2. Wie?
Dieser Fork ist eine theoretisch 'fertige' Version des gennanten Framework-wechsels (siehe \#3).

# 3. Neues:
* Dieser Server rendert Markdown-dateien aus */artikel' ohne dabei Client-seitiges JS zu bemühen.
* **Hier könnte ihr Feature stehen :)**

# 4. Deploy
Am Deployment hat sich durch diesen Fork nichts geändert:


#### Projektdaten Installieren (nodejs und npm vorrausgesetzt)
```sh
npm install
```

#### Lokalen Webserver um die Änderungen zu checken
```sh
npm run serve
```
# 5. Zukunft:
Durch Server-seitiges rendern (SSR) werden folgende Features Folgendes einfacher/möglich:

* Markdown-artikel (siehe diesen Fork)
* Caching
* Dashboards (Mehr apis können verwendet werden, mit caching sogar diese mit maximal-request limit)
* Fallbacks (Wer Kein JS hat kann optimierten, vorberechenten Content erhalten)
