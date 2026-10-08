import { Component } from '@angular/core';

import { SEED_STUDENTS } from '../01-basics/student.model';

/*
 * MODULE 3: input(), input.required, transform, output(), model()
 *
 * This page (parent) owns the state. Children only display and report events.
 *
 * Step 5. Parent
 *   - `students` signal with SEED_STUDENTS, `query` signal, `filtered` computed
 *     (reuse what you wrote in module 1, do not import it).
 *   - `<app-search-box [(query)]="query" />` bound to the parent's `query` signal.
 *   - One `<app-student-card>` per filtered student, handling `(toggleActive)`
 *     with an immutable update.
 *   - A checkbox "Widok kompaktowy" that switches `compact` on all cards.
 *
 * Step 6. Tests (create `student-card.spec.ts` next to the card)
 *   - Renders the student's name (set the input with `fixture.componentRef.setInput`).
 *   - Clicking the button emits the student's id through `toggleActive`.
 *   Run with `pnpm test`.
 *
 * Step 7 is in student-card.ts.
 *
 * Interview question (own words, full sentences):
 *   "Co zastępuje ngOnChanges i dlaczego to lepsze?"
 */
@Component({
  selector: 'app-students-page',
  template: `
    <h1>Moduł 3: input, output, model</h1>
    <p class="hint">Zacznij od student-card.ts, potem search-box.ts, na końcu ten plik.</p>
  `,
})
export class StudentsPage {
  // Remove once you use SEED_STUDENTS in Step 5.
  protected readonly seedCount = SEED_STUDENTS.length;
}
