# Kliensoldali webprogramozás 1. zh

1. feladat (5 pont) - jQuery Zoom könyvtár ([https://www.jacklmoore.com/zoom/](https://www.jacklmoore.com/zoom/)) segítségével az "our blog" szekcióban található képekre (3 darab) állítsuk be, hogy az egeret a kép fölött mozgatva annak nagyított változata jelenjen meg. A könyvtárat töltsük be [https://www.jsdelivr.com/](https://www.jsdelivr.com/)-ról. Függősége a jQuery, így azt is be kell tölteni. A könyvtár weboldalán találhatók példakódok a használatra. A szükséges JavaScript kódot külön fájlba helyezzük, az _index.html_-t a `<script>` elemek beszúrásán kívül ne módosítsuk.

2. feladat (7 pont) - helyezzünk el az oldal jobb alsó sarkában egy gombot (`<button>` címke), melyre kattintva gördülve jutunk az oldal tetejére (smooth scroll). A gomb csak akkor legyen látható, ha legalább annyit legörgettünk, amennyi a `banner_part` css osztályú elem magassága.
   A smooth scroll működés csak erre a gombra legyen érvényes. A gomb dinamikusan JavaScript fájlból legyen hozzáadva az oldalhoz. Az _index.html_-t a `<script>` elem beszúrásán kívül ne módosítsuk. A gomb használja a _css/ownstyle.css_ fájlban leírt stílusozást (`#scroll-up`, ~~.scroll~~ `.show`).

3. feladat (8 pont) - Web Components (template + custom elements + shadow dom) használatával a Join Our Newsletter szekcióban található szöveges mezőt okosítsuk fel úgy, hogy helyette két szöveges mező jelenjen meg köztük egy kukac (@) karakterrel. A Subscribe now gombra kattintva küldődjön el az űrlap benne az értékkel. Ehhez szükséges az eredeti szöveges mező értékét beállítani minden módosításkor. Az _index.html_-ben levő `#email-field-template` sablon legyen használva.