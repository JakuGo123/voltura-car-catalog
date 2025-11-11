# Voltura Car Catalog

Aplikacja webowa do przeglądania i filtrowania katalogu samochodów elektrycznych Voltura.

## Technologie

- Vue 3 (Composition API)
- TypeScript
- Vite
- CSS (bez frameworków)

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

---

## Notatki deweloperskie

### Moje komentarze i przemyślenia

*Tutaj możesz dodać swoje notatki, uwagi dotyczące projektu, rzeczy do poprawy, itp.*

**Do zrobienia:**
- [ ] 

**Znane problemy:**
- 

**Pomysły na przyszłość:**
- 

---

## Licencja

Projekt stworzony jako zadanie rekrutacyjne dla Voltura.
