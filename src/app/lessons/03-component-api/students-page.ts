import { Component, computed, signal } from '@angular/core';

import { SEED_STUDENTS, Student } from '../01-basics/student.model';
import { StudentCard } from './student-card';
import { SearchBox } from './search-box';
// import { FormsModule } from '@angular/forms';

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
    <p>
      Widok kompaktowy:
      <input type="checkbox" [checked]="compact()" (change)="compact.update((v) => !v)" />
    </p>
    <app-search-box [(query)]="query" />
    @for (student of filteredStudents(); track student.id) {
      <app-student-card
        [compact]="compact()"
        [student]="student"
        (toggleActiveClick)="toggleActiveClick($event)"
      />
    }
  `,
  imports: [StudentCard, SearchBox],
})
export class StudentsPage {
  protected readonly students = signal<readonly Student[]>(SEED_STUDENTS);
  protected query = signal('');
  protected readonly compact = signal(false);

  protected readonly filteredStudents = computed(() => {
    const query = this.query().toLowerCase();
    return this.students().filter((student) => student.name.toLowerCase().includes(query));
  });

  toggleActiveClick(id: number): void {
    this.students.update((students) =>
      students.map((student) =>
        student.id === id ? { ...student, active: !student.active } : student,
      ),
    );
  }
}
