import { Component } from '@angular/core';

/*
 * MODULE 10: Signal Forms (experimental) next to Reactive Forms
 *
 * `@angular/forms/signals` is EXPERIMENTAL. Treat this lesson as a comparison,
 * not as advice to ship it.
 *
 * Step 1. Reactive Forms baseline
 *   - A "nowa lekcja" form: student (select), subject, date, duration (minutes), notes.
 *   - FormGroup with validators, inline errors, a submit button disabled while invalid.
 *   - Count how many places the state of this form lives in.
 *
 * Step 2. The same form with Signal Forms
 *   - A model signal holding the form value, and `form()` from @angular/forms/signals.
 *   - Field bindings, validation and submit.
 *
 * Step 3. Compare, in writing
 *   - Where does the value live in each version, and what is the source of truth?
 *   - How do you derive something (e.g. end time from date + duration) in each?
 *   - What is the bundle cost of each (check the chunk size in `pnpm build`)?
 *
 * Step 4. The judgement call
 *   - Would you ship the experimental API in a product today? Write down the
 *     conditions under which the answer changes.
 *
 * Interview question:
 *   "Jak decydujesz o wejściu w eksperymentalne API frameworka?"
 */
@Component({
  selector: 'app-lesson-form-page',
  template: `
    <h1>Moduł 10: Signal Forms</h1>
    <p class="hint">Uzupełnij wg komentarza w pliku.</p>
  `,
})
export class LessonFormPage {}
