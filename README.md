# Zadanie Rekrutacyjne OXIMO

Aplikacja służy do generowania plików HTML na podstawie tekstu artykułu. Umożliwia pobranie:
+ **artykul.html** - plik HTML zawierający wklejony tekst w gotowym formacie.
+ **szablon.html** - pusty szablon HTML do dalszego wykorzystania.
+ **podglad.html** - podglądowy plik HTML z osadzonym szablonem.

## Jak to działa:

1. **Wklejanie artykułu lub przesyłanie pliku:**
   + Możesz wgrać plik z artykułem za pomocą przycisku **Upload File** lub wkleić tekst artykułu w odpowiednie pole tekstowe.
2. **Generowanie pliku HTML:**
   + Po wklejeniu tekstu kliknij przycisk **Generate HTML**, aby wygenerować plik `artykul.html`. Plik zostanie automatycznie pobrany po zakończeniu generowania.
3. **Pobieranie dodatkowych plików:**
   + Możesz pobrać `szablon.html` za pomocą przycisku **Download HTML Template**.
   + Przy generacji artykułu pojawi się przycisk **Download HTML Preview**, który pozwala na pobranie `podglad.html` z wklejonym tekstem w gotowym formacie.

Pliki **artykuł w pliku tekstowym**, **artykul.html**, **szablon.html**, **podglad.html** znajdują się w **src/preview**.

## Instrukcja uruchomienia projektu lokalnie:

### 1. **Klonowanie repozytorium:**
1. Otwórz terminal i sklonuj repozytorium, wpisując:
```bash
git clone https://github.com/GabrielGladykowski/Zadanie-rekrutacyjne-OXIDO.git
```

### 2. **Pobranie bibliotek:**
1. Przejdź do głównego folderu projektu
2. Zainstaluj wymagane zależności, uruchamiając:
```bash
npm install
```

### 3. **Konfiguracja pliku `.env`:**
1. W głównym katalogu projektu stwórz plik `.env`:
2. Otwórz plik .env i dodaj następujące linie:
```env
VITE_OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_API_URL=https://api.openai.com/v1/chat/completions
```
> **Uwaga:** Upewnij się, że posiadasz aktywny klucz API OpenAI, który możesz uzyskać z [platformy OpenAI](https://platform.openai.com/).

### 4. **Uruchomienie projektu:**
1. W terminalu wpisz:
```bash
npm run dev
```
2. Po uruchomieniu projektu w terminalu pojawi się link do lokalnego serwera.
3. Kliknij w link, przytrzymując **Ctrl** (lub **Cmd** na Macu), aby otworzyć aplikację w przeglądarce.

## Technologie:
+ Vite + React + TypeScript
+ OpenAI API
+ Styled-component
