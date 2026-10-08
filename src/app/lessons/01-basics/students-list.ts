import { Component, computed, signal } from '@angular/core';

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
    <input #searchInput type="text" [value]="query()" (input)="query.set(searchInput.value)" />

    <h2>Wyniki: {{ filtered().length }}, aktywnych: {{ activeCount() }}</h2>

    @for (student of filtered(); track student.id) {
      <p>
        {{ student.name }} {{ student.subject }} {{ student.level }}
        {{ student.active ? 'aktywny' : 'nieaktywny' }}
      </p>
      <button (click)="switchActivity(student.id)">Przełącz aktywność</button>
    }

    <button (click)="addStudent()">Dodaj ucznia</button>
  `,
})
export class StudentsList {
  protected readonly students = signal<readonly Student[]>(SEED_STUDENTS);
  protected readonly query = signal('');

  protected readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.students().filter((student) => {
      const name = student.name.toLowerCase();
      const subject = student.subject.toLowerCase();
      return name.includes(query) || subject.includes(query);
    });
  });

  protected readonly activeCount = computed(
    () => this.filtered().filter((student) => student.active).length,
  );

  protected switchActivity(id: number): void {
    this.students.update((studentsList) =>
      studentsList.map((student) =>
        student.id === id ? { ...student, active: !student.active } : student,
      ),
    );
  }

  protected addStudent(): void {
    this.students.update((studentsList) => [
      ...studentsList,
      {
        // Never derive an id from the array length: after a removal it repeats
        // an existing id and breaks `track student.id`.
        id: Math.max(0, ...studentsList.map((student) => student.id)) + 1,
        name: 'Nowy uczeń',
        subject: 'Nowy przedmiot',
        level: 'matura',
        active: true,
      },
    ]);
  }
}
