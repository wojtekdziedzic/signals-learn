# Signals lab: Angular 22 od sygnałów do stanu aplikacji

Sandbox do **samodzielnej nauki sygnałów w Angularze**. Repo nie zawiera gotowych
rozwiązań: w każdym module jest plik startowy z zadaniem opisanym w komentarzu,
a kod piszesz sam. Aplikacja jest zoneless (bez `zone.js`), czyli tak, jak startują
nowe projekty od Angulara 20.

Materiał celuje w dwie rzeczy naraz: pisanie nowego kodu na sygnałach oraz
rozumienie kompromisów na tyle, żeby je opowiedzieć na rozmowie technicznej.
Dlatego każdy moduł kończy się pytaniem rekrutacyjnym, a po drodze są kroki
"zepsuj to", w których celowo wywołujesz błąd i tłumaczysz, co się stało.

## Start

```bash
pnpm install
pnpm start
```

Aplikacja stoi na `http://localhost:4297`. Testy: `pnpm test`, build: `pnpm build`.

Wymagany Node w wersji wspieranej przez Angular 22 (`^20.19`, `^22.12` lub `>=24`).
W repo jest `.npmrc` z `use-node-version=24.20.0`, więc pnpm sam pobierze właściwą
wersję i nie trzeba przełączać globalnej instalacji.

## Jak z tego korzystać

1. Wejdź w moduł z menu po lewej, otwórz odpowiadający mu plik w `src/app/lessons/`.
2. Zrób kroki po kolei. Tam, gdzie zadanie prosi o przewidywanie, **najpierw zapisz
   swoją odpowiedź**, dopiero potem uruchom kod. Większość wiedzy siedzi w różnicy
   między jednym a drugim.
3. Od modułu 3 dopisuj testy (Vitest). Wzór konfiguracji jest w `src/app/app.spec.ts`.
4. Na koniec modułu odpowiedz na pytanie rekrutacyjne pełnym zdaniem, na głos.

Jeśli uczysz się z asystentem AI, dobry układ ról jest taki: asystent tłumaczy
koncept, czyta Twój kod i robi review, ale **nie pisze kodu za Ciebie**.

## Moduły

| # | Temat | Co ćwiczysz |
|---|---|---|
| 1 | `signal`, `computed` | stan, wartości pochodne, `set` vs `update`, niemutowalność, `Object.is` |
| 2 | Szablon i zoneless | co naprawdę odświeża widok bez `zone.js`, `@let`, `@for`, `@empty`, `@switch` |
| 3 | `input`, `output`, `model` | API komponentu na sygnałach, koniec z `ngOnChanges` |
| 4 | `viewChild` i spółka | zapytania jako sygnały, koniec z `ngAfterViewInit` i `static: true` |
| 5 | `effect`, `untracked` | skutki uboczne, sprzątanie, czemu `computed` to nie to samo |
| 6 | `linkedSignal` | stan edytowalny, ale resetowany źródłem |
| 7 | `resource`, `httpResource` | ładowanie danych, stany, anulowanie żądań |
| 8 | Interop z RxJS | `toSignal`, `toObservable`, `rxResource`, gdzie RxJS nadal wygrywa |
| 9 | Stan w serwisie | signal store bez biblioteki, `asReadonly`, selektory, testy bez komponentu |
| 10 | Signal Forms | eksperymentalne API obok Reactive Forms i decyzja, czy je brać |

Moduły 1-9 najlepiej robić po kolei, bo późniejsze korzystają z wcześniejszych.
Dane do ćwiczeń (lista uczniów) są w `src/app/lessons/01-basics/student.model.ts`
oraz w `public/data/` dla modułów o ładowaniu danych.

## Stack

Angular 22 (zoneless, standalone, lazy routes), TypeScript, Vitest, pnpm.
Zero zależności poza samym Angularem, żeby nic nie przesłaniało tematu.
