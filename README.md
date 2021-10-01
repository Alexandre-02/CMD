# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Alexandre Sicoux				

#### Je startniveau:
Ergens tussen de rode en blauwe piste 

#### Je focus:
Responsive
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://gasdrawls.com/

#### Screenshot(s) van de eerste pagina (small screen): 
Homepagina van Gasdrawls.com

<img src="images/screenshot.homepage.png" width="375px" alt="homepage gasdrawls">

#### Screenshot(s) van de tweede pagina (small screen):
Detail pagina van een album

<img src="images/screenshot.detailpagina.png" width="375px" alt="detailpagina mm..food">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="images/breakdown-homepagina-01.png" width="375px" alt="breakdown van de hele pagina met details">

### 2e pagina : 
<img src="images/breakdown-detailpagina.png" width="375px" alt="breakdown van detailpagina">

### dynamisch deel (menu): 
<img src="images/dynamisch-deel.png" width="375px" alt="breakdown van menu">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
Het opstellen van de html die ik had gemaakt aan de hand van de breakdownschets ging goed. Ook 
is het gelukt om al wat basic styling toe te voegen, bijvoorbeeld het toevoegen van het lettertype
en het positioneren van de producten (featured merch & featured music) mbv flex-wrap: wrap;. 

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- html is goed opgebouwd
- voor het uitleggen van een svg krijg je ophoging
- header: aline items center, span op de shopping- en search-icon, 
- toch de grootste images gebruiken, en deze dan verkleinen. 
- geen position absolute in de header gebruiken
- flex-gap op container of grid gebruiken voor ruimte tussen de 
 verschillende producten. 
- header position fixed voor gebruiken. 

</details>

## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
 
Ik heb deze week veel geprobeerd te doen en het ging niet altijd even goed, ik heb geprobeerd een 
hamburger menu te maken en met de tuturial van dlo kwam ik er nog niet helemaal uit. Na wat hulp van
de student-assistent en de docent ben ik er wel uitgekomen. 
 
<img src="images/hamburger-menu-voortgang.png" width="375px" alt="hamburger menu uitgeklapt">
<img src="images/code-hamburger-menu.png" width="375px" alt="code hamburger menu html & css">
<img src="images/hamburger-menu-java.png" width="375px" alt="hamburger menu java">

### Punten waar ik feedback op zou willen/vragen over heb
                                                        
- Het plaatsen van de mask afbeelding in de header
- Hoe ik het moet doen met het vervangen van de iframes met afbeeldingen, verschillende afbeeldingen
  voor verschillende groottes van het scherm misschien? Met behulp van media queries? 
- Fixed header position lukt niet zonder alles van plek te veranderen.
                                                              
### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- div om de icons van shopping en search veranderen in een ul
- source set op de img, meerdere images voor verschillende groottes
- align self of transform op de mask om deze in het midden te positioneren
- 2e pagina niet vergeten
- op het laatst nog opschonen waar nodig
 

</details>


## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:
 - wanneer je op buttons zoals het hamburgermenu (oftewel buttons zonder tekst) klikt weet je niet wat voor button het is 
   bij het gebruik van een screenreader
 - De focus tijdens het tabben is vaak nog niet helemaal duidelijk, voornamelijk bij de 
   'view all' button niet. 
 - Wanneer je begint te tabben op de pagina tab je ook naar de links in het hamburgermenu wanneer deze niet zichtbaar is.

#### Tab op buttons zonder tekst 
wanneer je op buttons zoals het hamburgermenu klikt weet je niet wat voor button het is 
bij het gebruik van een screenreader

Hoe het opgelost kan worden: 
met behulp van 'aria-label' kan je elementen een tekst meegeven die screenreaders gebruiken 
om het element te beschrijven.  

#### Focus niet altijd duidelijk 
De focus tijdens het tabben is vaak nog niet helemaal duidelijk, voornamelijk bij de 
'view all' button niet. 

Hoe het opgelost kan worden:
in de css moet ik nog even een aantal elementen een goede styling geven voor de :focus, 
de focus moet zodanig anders zijn van de default state dat het duidelijk te zien is wanneer
er op het element getabbed wordt. 
hieronder is het momentele verschil tussen de default- en focus-state te zien:
 
<img src="images/before-focus-button.png" width="150px" alt="button before focus">
<img src="images/after-focus-button2.png" width="150px" alt="button after focus">


#### tabben naar links in het hamburgermenu wanneer deze niet zichtbaar zijn. 
Wanneer je begint te tabben op de pagina tab je ook naar de links in het hamburgermenu wanneer deze niet zichtbaar is.

Hoe het opgelost kan worden:
Ik heb hier kort even met de docent over gehad en eigenlijk moet dit helemaal niet opgelost worden, blinden willen namelijk
wel de links in de navigatie weten. Als dit toch zou moeten worden opgelosten worden dan is dit mogelijk met 'tab-index'.

</details>


## Voortgang 3 (week 4)

<details>
 
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Ik heb deze week weer veel progressie gemaakt, wel liep ik tegen een aantal obstakels aan. Gelukkig heeft de student-assistent 
mij weer goed verder kunnen helpen. 

Dit ging er goed:
- het gebruiken van het picture element in combinatie met srcset en img om verschillende foto's te hebben voor verschillende 
 schermgroottes. 
 Daarvoor hieronder de code:
 <img src="images/code-picture-srcset.png" width="250px" alt="code picture srcset">

 Dit ging er lastiger:
- het goed positioneren van foto met hiernaast de rest van de content/beschrijving van het product. En dat de rest van de content bij 
  verkleining van het scherm ook onder de foto terecht komt. 
  Het resultaat wat ik samen met wat hulp van de student-assistent heb bereikt is hieronder te zie:
 
  <img src="images/detailpagina-ss-progress.png" width="250px" alt="detailpagina grid">
 
  Dit ga ik toch nog moeten veranderen, momenteel maak ik namelijk gebruik van dit als code voor de grid : 'grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));'
  alleen dan kan ik niet nog de columns individueel groter of kleiner maken, wat ik dus ga doen is dit vervangen met media queries. Op deze manier zou het wel moeten 
  lukken.
- Ook heb ik het probleem dat mijn ordered list op een klein scherm de nummers niet toont. Ik denk dat dit simpelweg op te lossen is door een margin of padding left toe 
  te voegen, maar di weet ik nog niet zeker. Ik heb namelijk nog niet de mogelijkheid gekregen om dit element te stylen.
 
- het centreren van de neppe Youtube players wanneer deze in 1 column zijn was mij ook niet gelukt. Uiteindelijk bleek de oplossing toch erg simpel namelijk alleen maar 
  de lijn code 'place-self: center;'
 



### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Het centreren van de mask in de header kan je doen door de button van het hamburgermenu een beetje margin-right te geven.
- Dat het niet goed werkt op iphone 5/se grootte komt door de code 'grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));' , dit is op te lossen door 
  media queries te gebruiken. -> media query(1px 1fr) en dan op 320px breedte (grootte vh scherm) aanpassen naar 10em 1fr.
- Aria-labels gebruiken voor de svg, kijken naar artikel: https://css-tricks.com/accessible-svgs/
- De grid-template-columns: repeat(auto-fit, minmax(30em, 1fr)); op de detailpagina vervangen met een media query dan werkt de img wel normaal en kan je ook 
  de img meer ruimte geven ten opzichte van de tekst die hiernaast moet komen te staan.
- Nog even goed het beoordelingsformulier bekijken om te kijken of ik iets heb gemist.
- Niet vergeten dat ik ophoging kan krijgen als ik svg's kan uitleggen. 

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1
2. bron 2
3. ...

</details>
