# Rozwiązania

Ta gałąź zawiera przykładowe rozwiązania modułów, które są już przerobione.
Gałąź `master` zostaje czysta: tam są same zadania.

| Moduł | Stan |
|---|---|
| 1. signal i computed | rozwiązany |
| 2. szablon i zoneless | rozwiązany (część A opisana w komentarzach, kod końcowy to część B) |
| 3. input, output, model | rozwiązany, z testami w `student-card.spec.ts` |
| 4-10 | puste pliki startowe, jak na `master` |

To jedno z możliwych rozwiązań, nie wzorzec jedynie słuszny. Jeśli Twoje różni się
strukturą, ale zachowuje te same reguły (stan tylko w sygnałach, wartości pochodne
w `computed`, brak mutacji w miejscu, brak logiki układu w klasie), jest dobre.

Dwie rzeczy, które warto obejrzeć w kodzie, bo niosą sedno kursu:

- `students-list.ts` (moduł 1): każda zmiana stanu przez `update` z nową tablicą
  i nowym obiektem. Mutacja w miejscu jest dla sygnału niewidzialna.
- `student-card.spec.ts` (moduł 3): test "updates derived values when the student
  input changes" jest dowodem, że `ngOnChanges` nie jest już do niczego potrzebny.
