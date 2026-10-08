import { Component } from '@angular/core';

import { SEED_STUDENTS } from '../01-basics/student.model';

/*
 * MODULE 2: signals in templates, zoneless change detection, control flow
 *
 * PART A: what actually refreshes the view without zone.js
 *
 * Step 1. Predict first (answer in chat BEFORE writing code)
 *   For each case, will the number on screen change by itself?
 *   A. A plain class field `plainTicks` incremented inside setInterval every 1 s.
 *   B. A signal `signalTicks` incremented inside the same setInterval.
 *   C. A plain class field `plainClicks` incremented in a (click) handler.
 *   D. After waiting a few seconds, you click a button whose handler does nothing.
 *      What happens to the number from case A?
 *
 * Step 2. Build the experiment and check your predictions
 *   - Cases A-D in one panel, each value visible on screen.
 *   - Start the interval in the constructor. Add a console.log inside it.
 *   - Do NOT clean the interval up yet.
 *
 * Step 3. Leak and cleanup
 *   - Go to "Start" and watch the console. Explain what you see.
 *   - Fix it: `inject(DestroyRef).onDestroy(...)` and `clearInterval`.
 *
 * PART B: control flow on the student list (use SEED_STUDENTS)
 *
 * Step 4. Filters as signals
 *   - `level`: 'all' or one of the Level values, bound to a <select>.
 *   - `onlyActive`: boolean, bound to a checkbox.
 *   - `visible`: computed list after both filters.
 *
 * Step 5. Template
 *   - `@let count = visible().length;` and show "Widocznych: {{ count }}".
 *   - `@for` over `visible()` with row numbers from `$index`,
 *     and a different style for the first row (`$first`).
 *   - `@empty` block with "Brak uczniów dla tych filtrów".
 *   - `@switch (student.level)` rendering a short label: SP / LO / Matura.
 *   - Check that "podstawowa" + "tylko aktywni" shows the @empty block.
 *
 * Step 6. Break it on purpose
 *   - Replace the @switch with a method call `{{ levelLabel(student) }}`,
 *     and put a console.log inside `levelLabel`.
 *   - Watch the console for 5 seconds without touching anything. Count the logs.
 *   - Explain why, then think about what that means for a list of 500 rows.
 *
 * Interview questions (own words, at the end):
 *   1. "Skąd Angular wie, co odświeżyć bez zone.js?"
 *   2. "Co przestałoby działać w aplikacji na Angular 18, gdyby wyłączyć zone.js?"
 */
@Component({
  selector: 'app-zoneless-lab',
  template: `
    <h1>Moduł 2: szablon i zoneless</h1>
    <p class="hint">Uzupełnij klasę i szablon wg komentarza w pliku.</p>
  `,
})
export class ZonelessLab {
  // Remove once you use SEED_STUDENTS in Step 4.
  protected readonly seedCount = SEED_STUDENTS.length;
}
