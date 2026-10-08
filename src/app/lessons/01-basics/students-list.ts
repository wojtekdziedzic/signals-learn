import { Component } from '@angular/core';

import { SEED_STUDENTS, Student } from './student.model';

/*
 * MODULE 1: signal, computed, set/update, immutable updates
 *
 * Build a student list with a text filter. Write the code yourself, step by step.
 *
 * Step 1. State
 *   - `students`: a writable signal holding SEED_STUDENTS.
 *   - `query`: a writable signal with the filter text (start with '').
 *
 * Step 2. Derived state (computed)
 *   - `filtered`: students whose name or subject contains `query` (case-insensitive).
 *   - `activeCount`: how many of the FILTERED students are active.
 *   - Rule: nothing in the template may filter or count by itself.
 *
 * Step 3. Template
 *   - An <input> that writes to `query` on every keystroke.
 *   - A list of `filtered` students (name, subject, level, active/inactive).
 *   - A line: "Wyniki: X, aktywnych: Y".
 *
 * Step 4. Writes
 *   - Button "Dodaj ucznia": appends a new student (any data, unique id).
 *   - Button per row "Przełącz aktywność": flips `active` for that student.
 *   - Use `update`, not `set`, and do NOT mutate the array or the object.
 *
 * Step 5. Break it on purpose (after it works)
 *   - Replace the "add" implementation with `this.students().push(...)`.
 *   - Observe what happens in the UI and explain WHY before reading any docs.
 *   - Revert.
 *
 * Interview question to answer in your own words at the end:
 *   "Czym signal różni się od BehaviorSubject?"
 */
@Component({
  selector: 'app-students-list',
  template: `
    <h1>Moduł 1: signal i computed</h1>
    <p class="hint">Uzupełnij klasę i szablon wg komentarza w pliku.</p>
  `,
})
export class StudentsList {
  // Keep the import alive until you use it in Step 1.
  protected readonly seed: readonly Student[] = SEED_STUDENTS;
}
