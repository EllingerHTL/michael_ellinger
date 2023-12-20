# Project Proposal für Testify: Einsatz von ChatGPT im Cypress E2E-Testprozess

## Einleitung zu Testify
Testify ist ein Unternehmen in der Digitalisierung von Arbeitsabläufen und Checklisten. Die Organisation zeichnet sich durch einen effizienten Zwei-Wochen-Sprintzyklus aus, der eine schnelle Reaktion auf Fehler ermöglicht und eine zügige Fehlerbehebung gewährleistet. Dieser agile Ansatz ist besonders herausfordernd, da Testify in einem dynamischen Umfeld mit häufigen Softwareupdates und kontinuierlichen Feature-Implementierungen agiert.

## Ausgangssituation
Testify's schneller Releasezyklus und ständiges Wachstum führen zu einem exponentiellen Anstieg des manuellen Testaufwands. Aktuell haben wir pro Sprint bis zu 27 PBIs, die die Web-App immer komplexer und größer werden lassen. Dazu kommen noch etliche Bug-fixes, die noch genauer getestet werden müssen. Die aktuelle Testressource ist begrenzt, was zu einer Vernachlässigung der Testautomatisierung führt. Ein Teufelskreis, dem wir entgegenwirken müssen, um die Produktqualität zu erhalten, weil Testify als Produkt in sehr sensiblen Chemie Bereichen im Einsatz ist, wo keine größeren Fehler auftreten dürfen. Da wir nur ein Startup sind, ist unser Budget natürlich sehr begrenzt und wir müssen mit neuen Ideen den Problemen entgegenwirken. Deswegen appelliere ich, dass der folgende Vorschlag, eine neue Strategie in Erwägung zu ziehen, unterstützt und gefördert wird. Um genauer zu sein, es handelt sich um Test Automatisierung Optimierung durch ChatGPT, grob gesagt, um manuellen immer wieder kehrenden Testaufwand zu verringern und mehr Sicherheit vorweisen zu können.

## Projektziele und Systemkonzepte
Das Ziel ist die Integration von ChatGPT in die Testautomatisierung, um Zeit zu sparen und mehr Bereiche automatisch abzudecken. ChatGPT soll Cypress-Tests für die Grundelemente der Web-App generieren, wodurch unser Fokus auf feinerem Cypress-Code und schnellere Fehlerbehebung liegt. Bei den meisten Cypress Tests geht es nicht um das Wissen, das der Programmierer mitbringen muss, sondern um die Geduld, jeden Namen / ID oder andere Identifizierung eines Buttons oder Feldes herauszufinden, und dann etliche Zeilen an Code zu schreiben, die immer wieder gleich aufgebaut sind um jeden Click so „Menschengetreu“ wie möglich zu programmieren. Die Simple Arbeit, Namen von Buttons zu finden und simple Codezeilen zu schreiben, könnte ChatGPT übernehmen und Zeit sparen, wo man sich dann auf genauere, zeitaufwändigere manuelle Fehlersuche konzentrieren kann oder wo man die Komplexeren, immer ändernden Bereiche von Testify automatisch testen lässt.

## Allgemeine Bedingungen und Beschränkungen
### Rahmenbedingungen
- **Budget:** Die finanziellen Mittel für Schulungen und ChatGPT Prime müssen bereitgestellt werden. Falls das Projekt nicht wie erwartet funktioniert, sollte das Budget ohne größere Verluste sein.
- **Know-how:** Internes Know-how wird durch Selbststudium und praktische Anwendung entwickelt.
- **Verpflichtungen:** Klarheit über die Projektaussichten muss frühzeitig bestehen, um bei Bedarf alternative Lösungen zu evaluieren.
- **Datenschutz:** Ein geschlossener Testbereich wird geschaffen, um Datenschutzrichtlinien einzuhalten.
- **Ressourcenlimits:** Die Möglichkeit zur täglichen manuellen Testarbeit muss stets gewährleistet sein, möglicherweise durch eine zeitlich begrenzte Aufstockung der Stunden.

## Chancen und Risiken
### Chancen
- Reduzierung des Testaufwands
- Verbesserte Produktqualität
- Kosteneinsparungen durch Vermeidung zusätzlicher Personalkosten
- Erworbenes Wissen für zukünftige Anwendungen

### Risiken
- Möglichkeit, dass sich herausstellt, dass ChatGPT für unsere spezifischen Testanforderungen noch nicht ausreichend entwickelt ist.

## Planung
### Projektmeilensteine
1. **Schulung und Einarbeitung:** 1,5 Wochen
2. **Pilotphase:** 4 Wochen
3. **Feedbackschleife und Optimierung:** Fortlaufend

### Ressourcen
- **Humane Ressourcen:** Teilzeitarbeitnehmer (20 Stunden pro Woche)
- **Lizenzen:** ChatGPT API
- **Sonstiges:** Schulungsmaterialien, dedizierte ChatGPT-Testumgebung bei Testify?

### Zeitplan
- **Projektstart:** Dezember 2023
- **Projektende:** April 2024 (Ende des Finanzjahres)
- **Erster Prototyp:** Januar 2024
- **Umsetzungsbeginn:** Mitte/Ende Februar

### Große Arbeitsblöcke
1. Schulung und Einarbeitung
2. Generierung des Pilot-Skripts
3. Integration mit CI/CD-Pipeline
4. Fortlaufendes Feedback und Optimierung
5. Machbarkeitsüberprüfung

## Aktueller Stand
Es wurden bereits erste Tests durchgeführt, um die Machbarkeit der Integration von ChatGPT in den Testprozess zu prüfen. Diese Tests umfassten die Generierung eines Cypress-Tests für eine kleine Webanwendung, was vielversprechende Ergebnisse hervorbrachte.

### Ergebnisse
[Cypress code](chat_GPT_For_Cypress_Codes/cypress_code.js)
[Web App Code](chat_GPT_For_Cypress_Codes/Testify2.0.html)
[Cypress Ausführung (Video)](chat_GPT_For_Cypress_Codes/Video_cypress.mp4)


Außerdem wurden viele Stunden mit ChatGPT verbracht, um einen ersten Eindruck von der KI zu bekommen und um vorzufühlen, ob das alles machbar ist und wo die Grenzen sind und wo man sich Zeit spart, wenn man es gleich selber programmiert. Aber all diese Informationen würden den Rahmen sprengen. Bei Interesse kann gerne ein Termin vereinbart werden, um näher auf das Thema einzugehen.

Nebenbei wurde auch viel recherchiert, und alle möglichen Zeitschriften/Foren und Blogs sind zu derselben Schlussfolgerung gekommen, dass sehr viel Potenzial zur Zeitersparnis im Thema von ChatGPT in Verknüpfung von Cypress Tests liegt. Auch wenn die ChatBots noch in der Anfangsphase sind, bedeutet das auch, dass sich mit einer unglaublich großen Geschwindigkeit neue Wege auftun werden, die es optimal ist, schon sehr früh zu erforschen.

### Kurzer Einblick was ChatGPT zu dem Thema sagt (ein wenig Überspitzt)
[Link zu ChatGPT-Proposal](chat_GPT_For_Cypress_Codes/ChatGPT_Proposal.md)

## Quellen
- [Perfecto State of Test Automation](https://www.perfecto.io/sites/default/files/pdfs/ebook-perfecto-state-test-automation-23.pdf)
- [Micro Focus Smarter Testing](https://www.microfocus.com/en-us/smarter-testing?utm_source=google&utm_medium=cpctx&utm_campaign=7018e000000DYKMAA4&gad_source=1&gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTewMyayGzkCRtjwUxAooiXdsv1S1chi9s074z4sOVYl439yjyMzGzsaAu-oEALw_wcB)
- [ChatGPT and Automation Testing](https://blog.kms-solutions.asia/chat-gpt-and-automation-testing)
- [How ChatGPT Writes Code for Cypress](https://dzone.com/articles/how-chatgpt-writes-code-for-automation-tool-cypres)
- [How to Integrate ChatGPT into Your Automation Framework](https://kailash-pathak.medium.com/how-chatgpt-generate-code-for-automation-tool-cypress-79859f499a1e)
- [Software Testing with ChatGPT as Assistant](https://pirasanth.com/blog/how-to-integrate-chatgpt-into-your-automation-framework)
- [Asserting Network Calls from Cypress Tests](https://www.heise.de/hintergrund/Software-Testing-mit-ChatGPT-als-Assistent-9351842.html)
- [Using Shared Test Context](https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests)
- [AI Summit by UiPath](https://www.uipath.com/events/ai-summit?utm_source=google&utm_medium=cpc&utm_campaign=DACH_Tier-1_ENG_Gen_T2_Product&utm_term=chatgpt%20automation-p&utm_content=G_Product-ChatGPT&gad_source=1&gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTesNMrX27KIXjLKher4awB_WgQK38eAKnOZLS4G5ARhbuz1MLtDcggaAmHhEALw_wcB&gclsrc=aw.ds)

## Schlussfolgerung
Die Integration von ChatGPT in Testifys Testprozess ist ein strategischer Schritt zur Optimierung der Effizienz, Reduzierung manueller Testaufwände und Verbesserung der Testabdeckung. Es ist der erste Schritt, um sicherzustellen, dass die Produktqualität auch in Zukunft gewährleistet bleibt. Außerdem steckt ein unglaubliches Potenzial hinter ChatGPT, das laufend mehr wird, und eine Änderung in der Teststrategie ist unausweichlich, wobei diese Lösung womöglich die schnellste und kostengünstigste ist.