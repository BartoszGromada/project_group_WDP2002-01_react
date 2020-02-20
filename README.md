


# WDP Projekt Zespołowy

## Opis projektu

Przykładowa strona sklepu internetowego, zakodowana na bazie darmowego szablonu PSD. Projekt realizowany przez kilkuosobową grupę w ramach kursu programowania.

## Demo

link do uzupełnienia po publikacji [Bazar]()

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

Platforma komunikacji: **Jira** oraz komunikator **Kodilla**

Środowisko pracy **React**

**Podstawowa struktura katalogów projektu:**
- src
  - components
    - common
    - features
    - layout
    - views
  - redux
  - styles

**Style**
 Style globalne znajdują się w katalogu `styles`, natomiast style dla poszczególnych komponentów, umieszczamy w katalogach konkretnego komponentu pod nazwą `NazwaKomponentu.module.scss`

**System kontroli wersji**
Podczas pracy korzystamy z GitHub'a.
Tworząc nowy branch nazywamy go `WDP200202-numerTicketu`.

