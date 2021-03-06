---
lang: sv
slug: importera
ref: official.people.import
title: Importera ditt gamla register
kicker: |
    Om du redan har listor över människor som du vill använda Zetkin för att
    organisera kan du använda importfunktionen för att komma igång snabbt och
    enkelt.
---
Zetkins importfunktion kan också användas för att uppdatera befintliga
personuppgifter i stor skala eller för att sätta olika etiketter på många
människor samtidigt.

Läs mer om hur Zetkins importverktyg fungerar nedan, eller titta på guiden
[Importera dina medlemmar](/sv/for-funktionarer/guider/importera-dina-medlemmar)
för ett exempel med instruktioner steg för steg.


## Importera Excel-filer
Zetkins import-funktion kan ta emot filer från alla de senaste versionerna av
Microsoft Excel (xls och xlsx). Om en fil innehåller flera kalkylblad får du
välja under importen vilket blad du vill hämta data från.

Under _Människor_ i Zetkin Organize hittar du import-sektionen. Där kan du dra
och släppa din Excel-fil för att importera den. Efter att du ställt in hur du
vill att Zetkin ska tolka filen trycker du på "Importera". När importen är
färdig får du information om hur många människor som importerats.

## Vad vill du importera?
> Om översta raden i din fil utmärker sig tolkar Zetkin den som rubriker. Du
> kan själv ställa in hur Zetkin ska tolka första raden.

När du laddar in en Excel-fil försöker Zetkin tolka de olika raderna och
kolumnerna. Tomma kolumner ignoreras.

Om Zetkin inte kan gissa, eller gissar fel, måste du ställa in vad varje kolumn
innehåller, och har möjlighet att bestämma vilka kolumner som ska importeras,
och hur.

![Välj kolumner att importera](importera.png)

### ID för sammanslagning
Ifall personer du importerar redan finns i din persondatabas i Zetkin vill du
antagligen inte att det skapas dubletter. För att Zetkin ska kunna koppla samman
den befintliga personen med den som importeras behövs någon form av ID. När du
importerar kan du välja två typer av ID som Zetkin använder för att slå samman
personer.

![ID för sammanslagning](./id-for-sammanslagning.png)

> Om du importerar från ett annat system, inkludera alltid det andra systemets
> ID som _Externt ID_, även första gången du importerar.

_Zetkin-ID_ är Zetkins interna ID-nummer. Varje ny person som importeras får ett
Zetkin-ID. Om den fil du importerar tidigare har exporterats ur Zetkin har den
antagligen en kolumn för Zetkin-ID.

Du väljer själv vad du vill använda som _Externt ID_ i din organisation. Om ni
har ett medlemsregister eller annat system som ni importerar ifrån har varje
person antagligen ett ID-nummer i det systemet. Då är det klokt att inkludera
det i importen till Zetkin, och välja _Externt ID_ för den kolumnen.

Inkludera _Externt ID_ redan vid första importen. Då kommer framtida importer,
förutsatt att _Externt ID_ inkluderas även då, inte att resultera i dubletter
utan istället i att personer i Zetkin uppdateras med de senaste uppgifterna från
ert register.

### Personuppgifter
Det vanligaste är att man vill importera personuppgifter, såsom namn, adress,
e-postadresser och telefonnummer.

> Varje rad i en importfil motsvarar en person, och varje kolumn motsvarar ett
> fält (till exempel namn eller adress) för respektive person.

För att Zetkin ska kunna förstå denna typ av information vid en import behöver
du bara välja vilket fält som respektive kolumn motsvarar. De fält du kan välja
på är:

* Förnamn
* Efternamn
* E-post
* Telefon
* C/O-adress
* Gatuadress
* Postnummer
* Ort
* Kön

### Etiketter
I Zetkin kan du [använda etiketter](../etiketter) för att lättare organisera en
växande personlista. När du importerar personer kan du samtidigt sätta etiketter
baserat på innehållet i kolumner.

Det finns inga strikta regler för hur etikettkolumner ska se ut, utan du kan
använda importverktygets kolumninställningar för att översätta värden till
etiketter.

Två vanliga metoder är att antingen ha en kolumn per etikett, eller en kolumn
där olika värden betyder olika etiketter. Låt oss utgå från ett exempel.

Om vi i Zetkin har tre etiketter som heter _Aktivist_, _Feminism_ och _Medlem_
skulle ett utdrag ur en importfil kunna se ut såhär, där varje rad är en
person:

![Etiketter i Excel](./importera-etiketter.png)

Ett "Ja" i kolumn E betyder att personen ska ha etiketten _Aktivist_. Ett "Ja"
i kolumn F betyder att personen ska ha etiketten _Feminism_. Beroende på vilket
värde som står på respektive rad i kolumn G ska personer antingen få etiketten
_Aktivist_, _Medlem_ eller ingen alls.

> Om du vill kan du koppla värden i en kolumn till flera etiketter. Vissa värden
> kan kopplas till en etikett och andra till flera i samma kolumn.

När du väljer att en kolumn innehåller etikettinformation försöker Zetkin gissa
vad de olika värden som finns i kolumnen betyder. Om du anger namn på etiketter
som existerar, som med kolumn G i exemplet, kommer Zetkin automatiskt koppla
värden till etiketter.

I andra fall, som med kolumn E och F där värdet "Ja" inte uppenbart motsvarar
en viss etikett, måste du manuellt ställa in vilken etikett ett "Ja" ska kopplas
till.

Du kan se direkt i förhandsvisningen vilka människor som kommer att få vilka
etiketter när du importerar. Efter importen får du information om hur många
människor som fått etiketter.

## Uppdatera personer i Zetkin
Du kan inte bara importera helt nya människor med Zetkins importverktyg, utan
också uppdatera befintliga människor. För att kunna göra det måste varje rad
innehålla ett ID för sammanslagning. Det kan antingen vara Zetkins eget
ID-nummer, eller ett externt ID-nummer, exempelvis från din organisations
medlemsregister.

Om någon kolumn heter "ID" eller dylikt kommer Zetkin automatiskt att känna igen
information i kolumnen som Zetkin-ID. Annars måste du själv ange vilken kolumn
som innehåller ID.

Om du vill uppdatera personer med hjälp av externt ID måste det finnas angivet
på varje person i Zetkin sedan tidigare, exempelvis från en tidigare import.
Därför är det klokt att inkludera externa ID första gången du importerar
personer till Zetkin.

Efter importen kan du se hur många människor som skapats respektive uppdaterats.

## Om det uppstår dubletter
Även om du är försiktig och alltid inkluderar något ID för sammanslagning vid en
import kan dubletter uppstå. Det kan bland annat hända därför att en användare
har anslutit till din organisation i Zetkin och ett personobjekt därför skapats
i din persondatabas utan någon koppling till ert register (_Externt ID_).

Om samma person då förekommer i en framtida import från ert medlemsregister
kommer Zetkin inte kunna koppla samman den importerade personen med den
befintliga.

I en kommande version av Zetkin finns funktioner för att enkelt söka fram och
slå samman dubletter som uppstått. Om ni har stora problem med dubletter redan
idag, kontakta Zetkin Foundation för hjälp.
