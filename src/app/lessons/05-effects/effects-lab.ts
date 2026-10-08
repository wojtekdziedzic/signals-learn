import { Component } from '@angular/core';

import { SEED_STUDENTS } from '../01-basics/student.model';

/*
 * MODULE 5: effect, untracked, onCleanup
 *
 * An effect is for SIDE EFFECTS (storage, logging, a non-Angular library),
 * never for deriving state. Deriving state is what computed is for.
 *
 * Step 1. Remember the filter
 *   - `query` signal plus a filtered list (reuse module 1).
 *   - An effect that writes `query()` into localStorage on every change.
 *   - Read the stored value back when the component is created, so a reload
 *     restores the filter.
 *
 * Step 2. untracked
 *   - Add a `saveCount` signal, incremented inside the effect.
 *   - Make the effect read `saveCount` WITHOUT depending on it (hint: untracked).
 *   - Remove the untracked wrapper and explain what happens and why.
 *
 * Step 3. onCleanup
 *   - A second effect that starts a setTimeout whenever `query` changes and logs
 *     "szukam: ..." after 500 ms (a poor man's debounce).
 *   - Cancel the pending timeout in onCleanup. Type fast and watch the console:
 *     with cleanup you get one log, without it you get one per keystroke.
 *
 * Step 4. Break it on purpose
 *   - Inside an effect, set a signal that the same effect reads. What does Angular do?
 *   - Replace that effect with a computed. Write down the rule you just proved.
 *
 * Step 5. Where effects do NOT belong
 *   - Rewrite "liczba wyników" from an effect into a computed, and say in one
 *     sentence how you recognise the difference.
 *
 * Interview question:
 *   "Kiedy effect, a kiedy computed? Czemu ustawianie sygnału w effekcie to zapach?"
 */
@Component({
  selector: 'app-effects-lab',
  template: `
    <h1>Moduł 5: effect i untracked</h1>
    <p class="hint">Uzupełnij wg komentarza w pliku.</p>
  `,
})
export class EffectsLab {
  // Remove once you use SEED_STUDENTS in Step 1.
  protected readonly seedCount = SEED_STUDENTS.length;
}
