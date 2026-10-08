import { Component } from '@angular/core';

import { SEED_STUDENTS } from '../01-basics/student.model';

/*
 * MODULE 6: linkedSignal
 *
 * The classic problem: a value the user can change, which must reset when its
 * source changes. Before linkedSignal this was done with an effect, and it was
 * easy to get wrong.
 *
 * Step 1. The problem first (do NOT skip this)
 *   - `subject` signal: 'matematyka' | 'fizyka' | 'angielski', bound to a <select>.
 *   - `visible`: students of that subject (computed).
 *   - `selectedId`: a plain writable signal with the chosen student.
 *   - Pick a student, then switch the subject. What is wrong with the selection?
 *
 * Step 2. The old fix
 *   - Reset `selectedId` from an effect watching `visible`.
 *   - Note in chat what you dislike about it (hint: order of execution, extra render,
 *     and setting a signal inside an effect, which module 5 flagged as a smell).
 *
 * Step 3. linkedSignal
 *   - Replace both with `selectedId = linkedSignal(() => this.visible()[0]?.id)`.
 *   - Check: selecting still works, switching the subject resets the selection.
 *
 * Step 4. The source/computation form
 *   - Rewrite it using the object form:
 *     `linkedSignal({ source: this.visible, computation: (list, previous) => ... })`
 *   - Keep the previously selected student if they are still in the new list,
 *     otherwise fall back to the first one. `previous` holds the old value.
 *
 * Step 5. Test (`linked-signal-lab.spec.ts`)
 *   - Changing the subject resets the selection to the first matching student.
 *
 * Interview question:
 *   "Czym linkedSignal różni się od computed i od zwykłego signala?"
 */
@Component({
  selector: 'app-linked-signal-lab',
  template: `
    <h1>Moduł 6: linkedSignal</h1>
    <p class="hint">Uzupełnij wg komentarza w pliku.</p>
  `,
})
export class LinkedSignalLab {
  // Remove once you use SEED_STUDENTS in Step 1.
  protected readonly seedCount = SEED_STUDENTS.length;
}
