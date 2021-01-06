# Wie lange dauert's noch bis alle in Deutschland geimpft sind?
Eine (aktuell) sehr winzige Website mit einem Counter, wie lange wir noch brauchen bis 100% der Deutschen geimpft sind.
Natürlich ist es utopisch vorrauszusetzen das 100% geimpft werden. Aber ich finde, es ist dennoch eine interessante Zahl.

In Zukunft wird unter anderem noch ein Graph eingebaut wie sich die Geschwindigkeit pro Tag ändert, gegebenenfalls gibts noch informationen zur Herdenimmunität usw. Pull requests sind Willkommen!

### Aktuelle Problematik bei der Datenbasis
Das RKI gibt an "Anmerkung zu den Indikationen: Es können mehrere Indikationen je geimpfter Person vorliegen."
Jede Person muss zweimal geimpft werden um den vollständigen Schutz zu haben. Ich kann leider derzeit noch nicht aus der Datenquelle erfahren, ob die zweite Dosis die Anzahl der geimpften Personen erhöht.
Da leider aufgrund der Auslastung des RKI's derzeit keine Bürgerfragen beantwortet werden, würde ich mich freuen wenn jemand mit journalistischem Hintergrund ebenfalls Interesse an der Klärung dieser Frage hat. Als Pressevertreter kann man weiterhin unter

rki.de/DE/Service/Kontakt/Anfragen/Anfragen_node.html

Anfragen an das RKI stellen.

## Art der Berechnung
Als Datenbasis liegt die folgende API zugrunde

https://github.com/ThisIsBenny/rki-vaccination-data

Auch ein Open Source Projekt und dort werden die vom RKI veröffentlichte Tabelle zu geimpften Personen und die Statistischen Ämter für die Anzahl der Einwohner zugrunde gelegt.

Die Berechnung der Dauer bis theoretisch alle Menschen in Deutschland geimpft sind mache ich wie folgt:

```
Quote = Geimpfte Personen / Gesamteinwohner
VerbleibendeTage = (TageImpfbeginnBisLetztesUpdate / Quote * 100) - TageSeitImpfbeginn
``` 

## Mithelfen
Ich bin selbst kein Virologe und kann mich nur auf Daten beziehen die ich aus öffentlichen Quellen bekommen kann. Mich würde aber freuen, wenn nach und nach aus dieser Idee eine gute Informationsquelle für den Fortschritt der Bekämpfung von COVID-19 entstehen kann. Ich freue mich über sinnvolle Issues / Pull Requests.

Projektdaten Installieren (nodejs und npm vorrausgesetzt)
```
npm install
```

Lokalen Webserver um die Änderungen zu checken
```
npm run serve
```