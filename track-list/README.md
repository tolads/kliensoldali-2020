# 5. gyakorlat jegyzete

- https://reactjs.org/ - React könyvtár weboldala, jól érthető dokumentációja van, érdemes lehet elolvasni.
- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) - én is olvastam régebben, nagyon tudom ajánlani bárkinek, aki úgy érzi, hogy bizonytalan a JavaScript nyelvi alapokban.

`npx create-react-app track-list` parancsot futtatva hoztam létre a projektet (ezt a track-list mappát). Az npx parancs segítségével npm csomagot lehet futtatni. npm a node package manager csomagkezelő. Úgy működik, hogy megnézi, hogy a parancs elérhető-e lokálisan vagy globálisan, ha nem, akkor futtatás előtt telepíti.
A [create-react-app](https://create-react-app.dev/) egy npm csomag, mely segít létrehozni a környezetet egy React alkalmazáshoz. Ez a legelterjedtebb módja React alkalmazások készítésének.
A track-list lesz a projektünk neve.

A parancs futtatása után létrejött mappában levő fájlok és mappák:

- README.md - Ebben a fájlban lehet leírást elhelyezni a projektről. Például,
  hogy miről szól, hogyan kell használni, hogyan lehet elindítani, milyen dolgokra
  kell esetleg figyelni a fejlesztés közben, stb. Markdown a formátuma, tudunk előnézetet nézni VS Code-ban.
- package.json - A projekt leírója. Ebben találhatók npm scriptek, amik például
  a projekt futtatásához, teszteléséhez, buildeléséhez szükségesek. Továbbá itt
  vannak leírva a projekt függőségei is.
  - [semver](https://semver.org/) a verzió formátuma, MAJOR.MINOR.PATCH, [Semver cheatsheet](https://devhints.io/semver)
  - verzióknál kalap azt jelenti, hogy a középső verzió lehet nagyobb
  - browserslist - támogatott böngészőverziók, több eszköz is használja ezt a konfigurációt, pl. a Babel
- node_modules - függőségek
- package-lock.json - a projekt függőségeinek és a függőségek függőségeinek a verzióját rögzíti. Így tudjuk garantálni, hogy minden telepítésnél ugyanúgy fog működni.
- .gitignore - git verziókezelőből kizárt fájlok
- public - A build artifactba változás nélkül, vagy csak jól definiált
  változtatásokkal bekerülő fájlok (pl.: index.html-be bekerül a projektből
  generált scriptet behúzó tag).
- src - a projekt forráskódja
  - index.js - Az alkalmazás belépési pontja.
  - setupTests.js - A tesztek futtatásához szükséges globális előkészítések.

A package.json scripts objektumában a következő parancsokat találjuk:

- `npm run start` vagy `npm start` - alkalmazás elindítása fejlesztői módban, http://localhost:3000 címen elérhető lesz.
- `npm run build` - production build készítése, a _build_ könyvtárba készíti el a lefordított alkalmazást.
- `npm run test` vagy `npm test` vagy `npm t` - tesztek futtatása, Jest indul interaktív módban. create-react-app futtatása után kaptunk minta teszt fájlt, azzal ki lehet próbálni, de kitöröltem.
- `npm run eject`

Forrásfájlok magyarázata:

- [import](https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Statements/import) paranccsal húzhatunk be fájlokból, könyvtárakból függvényeket, osztályokat, konstansokat. Ezeken kívül statikus fájlokat, mint képeket, css-t is behúzhatunk.
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) paranccsal teszünk importálhatóvá függvényeket, osztályokat, konstansokat.
- a fájlok JSX szintaxisban íródnak. Hogy használni tudjuk ezt a szintaxist, `import React from "react";` parancsnak szerepelnie kell a fájlban. Érdemes elolvasni: [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html).
- index.js - a public/index.html fájlban levő `#root` elembe rendereli a React fát.
- view/App.js, view/Track.js - az App és Track függvények React komponensek. A megjelenítendő HTML-el térnek vissza. A React függvény komponensek első paramétere egy objektum, props-nak nevezzük, itt kapnak bemenő adatot a React fában a szülő elemüktől. Itt most az App a szülő eleme 2 Track komponensnek.
- a view/App.js-ben levő `key` attribútum szükséges listáknál az elemek azonosítására, adott listán belül egyedinek kell lennie, magyarázat: [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html).
