import { Component } from '@angular/core';

import { SEED_STUDENTS } from '../01-basics/student.model';

/*
 * MODULE 4: signal queries (viewChild, viewChildren, contentChild)
 *
 * Reuse StudentCard from module 3 (import it, do not copy it).
 *
 * Step 1. viewChild on a DOM element
 *   - A search <input #search> and a "Szukaj" button.
 *   - `searchBox = viewChild.required<ElementRef<HTMLInputElement>>('search')`.
 *   - The button focuses the field and selects its text.
 *   - Then wrap the input in `@if (showSearch())` with a toggle button. What does
 *     the query return while the input is hidden? Switch to `viewChild(...)`
 *     (not required) if you have to, and explain why in chat.
 *
 * Step 2. viewChildren on components
 *   - Render one `<app-student-card>` per student (filtered by the search text).
 *   - `cards = viewChildren(StudentCard)`.
 *   - Show "Kart na ekranie: N" computed from the query, NOT from the array length.
 *   - Type a letter and watch N change. Where does the refresh come from?
 *
 * Step 3 is in collapsible-panel.ts. Use the panel on this page:
 *   put the list inside it and mark something with #badge in the projected content.
 *
 * Step 4. Break it on purpose
 *   a) Read `this.searchBox()` in the constructor. What happens, and how does it
 *      differ from reading an input there (module 3, NG8118)?
 *   b) Log `cards().length` inside an `effect`. Add/remove a card by typing in the
 *      filter. Does the effect re-run? Why?
 *
 * Step 5. Test (`queries-page.spec.ts`)
 *   - After `await fixture.whenStable()`, assert the card count matches the filter.
 *
 * Interview question (own words):
 *   "Czemu signal queries usuwają problem z ngAfterViewInit i static: true?"
 */
@Component({
  selector: 'app-queries-page',
  template: `
    <h1>Moduł 4: viewChild i spółka</h1>
    <p class="hint">Uzupełnij wg komentarza: najpierw krok 1, potem 2, na końcu panel.</p>
  `,
})
export class QueriesPage {
  // Remove once you use SEED_STUDENTS in Step 2.
  protected readonly seedCount = SEED_STUDENTS.length;
}
