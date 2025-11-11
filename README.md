# Voltura Car Catalog

Zadanie rekrutacyjne.

## Technologie

- Vue 3 (Composition API)
- TypeScript
- Vite
- Bootstrap 5
- CSS

## Wymagania

- Node.js (wersja 16 lub wyższa)
- npm lub yarn

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone https://github.com/JakuGo123/voltura-car-catalog.git
cd voltura-car-catalog
```

2. Zainstaluj zależności:

```bash
npm install
```

## Uruchomienie projektu

### Tryb deweloperski

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

### Build produkcyjny

```bash
npm run build
```

Zbudowane pliki znajdą się w katalogu `dist/`

### Podgląd buildu produkcyjnego

```bash
npm run preview
```

## Struktura projektu

```
src/
├── components/          # Komponenty Vue
│   ├── navigation/     # Nawigacja
│   ├── hero_section/   # Sekcja hero
│   ├── about_section/  # Sekcja "O nas"
│   ├── content/        # Główna zawartość z katalogiem
│   ├── bottom_banner/  # Banner dolny
│   └── footer/         # Stopka
├── locales/            # Tłumaczenia (i18n)
├── script/             # Utility scripts
└── style.css           # Globalne style
data/
└── cars.json           # Dane samochodów
```

## Funkcjonalności

- Przeglądanie katalogu samochodów elektrycznych
- Filtrowanie po modelach
- Responsywny design
- Modal z szczegółowymi informacjami o pojeździe
- Zapisywanie konfiguracji w localStorage

---

## Notatki deweloperskie

### Moje komentarze i przemyślenia

Nie wszystko zostało przeniesione 1:1 z udostępnionych materiałów, ale starałem się odwzorować design jak najlepiej. Główne zmiany:

- **Filtrowanie po modelu** - użyłem dropdown select zamiast pola input (tak sugerował layout) ale jest to mało sensowne z punktu widzenia UX - jeżeli odejmie mi to pkt to my bad
- **Filtr "Napęd"** - zamiast filtrowania elektryczny/nieelektryczny, filtruję po typie napędu: AWD (napęd na cztery koła), FWD (napęd na przednie koła), RWD (napęd na tylne koła)
- **Zdjęcia** - w użyłem tylko takich jakie udostępniał layout na figmie

---

## Licencja

Projekt stworzony jako zadanie rekrutacyjne.
