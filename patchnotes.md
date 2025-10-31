# Patch 0105202401

- Umbenennung calculation-Page in fraction (fraction.html)
- Umbenennung Javascript-Datei calc.js in fraction.js
- Einführung der Gleichungsseite (equation.html)
- Einführung der Javascript-Datei zur       Gleichungsseite (equation.js)
- Anpassung der Navigationsleiste
- optische Anpassungen der Seiten
- Erweiterung der readme-Datei

# Patch 0205202401

- Berechnung von Brüchen eingefügt (inkl. Erklärung und Anleitung)
- Gruppierung der Bereiche auf der Brüche-Seite (fraction.html)
- Allgemeine Änderungen bezüglich der Erweiterung um die Berechnung von Brüchen
- optische Anpassungen der Brüche-Seite
- Erweiterung der fraction.js um die Berechnung von Brüchen
- Anpassung der Main-Page(index.html)

# Patch 1105202401
- Aufgabenseite eingefügt (schoolwork.html)
- Javascript-Datei für Aufgabenseite (schoolwork.js)
- Hinweis und Link-Button zur Aufgabenseite auf der Main-Page hinzugefügt
- Erweiterung der readme-Datei
- time.js hinzugefügt, wird künftig für Berechnung von Zeitelementen benötigt (zugehörige Seite schon vorbereitet, aber noch nicht hochgeladen)

## Patch 2905202401
- Herausforderungsseite (challenge.html) und zugehörige JS-Datei(challenge.js) eingefügt
- Aufgabenseite um Auswertung erweitert
- Infotexte für Herausforderung und Aufgaben hinzugefügt
- Link zur Herausforderung in Navigation hinzugefügt
- Hinweis und Link-Button zur Herausforderung auf Main-Page hinzugefügt

## Patch 0910202501
- Einfache und quadratische Gleichungen auf einer Seite zusammengefasst (Ausführung via seperater JS-Datei simpleeq.js)
- Beschriftung im Code hinzugefügt
- Infotext der index-page ergänzt
- Infotext und Anleitung für einfache Gleichungen hinzugefügt
- Seite für einfache Gleichungen entfernt
- Erweiterung der readme-Datei

## Patch 1010202501
- Dark Mode eingefügt
    - muss auf jeder Seite manuell eingestellt werden
    - main.js für Dark Mode erstellt (evtl. auch für zukünftige allgemein benötigte Funktionen)
    - CSS für DM angepasst
- challenge.js angepasst
    - Klammern um negative Zahlen zur besseren Unterscheidung
    - Dezimalzahlen als Antwort werden jetzt intern auf 2 Stellen gerundet, bevor eine Auswertung stattfindet
- Hinweis zur Eingabe von Dezimalzahlen im Anleitungstext auf challange.html hinzugefügt

## Patch 3110202501
-   Herausforderungen entfernt (funktioniert so in PHP nicht)
-   Konvertierung in PHP