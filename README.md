# szmernijto-firefox-ext

Wtyczka została stworzona do szybszego publikowania treści na instancji lemmiego [szmer.info](https://szmer.info)

Do uruchomienia potrzebna jest przeglądarka oparta firefox w wersji przynajmniej 87.

## Budowanie

Do zbudowania wtyczki potrzebny jest lib web-ext, który można zainstalować przez npm. 
Wymagany jest do tego node minimum 10.

```text
npm install -g web-ext
```

Następnie w folderze, w którym znajdują się pliki wtyczki

```text
web-ext build --artifacts-dir=dist --overwrite-dest
```

## Development

Wtyczkę można uruchomoć w trybie developerskim przy pomocy web-ext, wszelkie zmiany zostaną automatycznie zainstalowane.

```text
web-ext run
```

## Instalacja

1. Pobierz [zip](https://github.com/szmerinfo/szmernijto-firefox-ext/archive/refs/heads/main.zip) z plikami wtyczki
2. Rozpakuj zip gdzieś na swoim dysku
3. Uruchom przeglądarkę Firefox
4. Przejdź do ustawień rozszerzeń (Ctrl+shift+A) i zainstaluj plik ZIP znajdujący się w folderze dist
6. Gotowe

## Prywatność

Wtyczka nie zbiera żadnych informacji o użytkowniku, jej podstawową funkcją jest przekierowanie ze strony,
którą chcemy się podzielić na stronę szmer.info i uzupełnienie formularza dodawania nowego postu.

Wtyczka wykorzystuje api szmer.info (iframely) do pobrania informacji o stronie szerowanej.
