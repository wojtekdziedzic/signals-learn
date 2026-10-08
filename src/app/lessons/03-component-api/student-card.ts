import { Component } from '@angular/core';

/*
 * MODULE 3, component 1 of 2: StudentCard (child)
 *
 * A card that shows ONE student. It knows nothing about the list or the parent state.
 *
 * Step 1. Inputs
 *   - `student`: required input of type Student (`input.required<Student>()`).
 *   - `compact`: optional boolean input, default false. Use a transform so the parent
 *     can write just `<app-student-card compact />` (hint: `booleanAttribute`).
 *
 * Step 2. Derived state from inputs
 *   - `initials`: computed from `student().name`, e.g. "Uczeń A" -> "UA".
 *   - In compact mode show only initials + name. Otherwise also subject, level, status.
 *
 * Step 3. Output
 *   - `toggleActive`: output<number> emitting the student's id when a button is clicked.
 *   - The card does NOT change the student itself. Why? Answer in chat.
 *
 * Step 7. Break it on purpose (after the page works)
 *   a) Read `this.student()` in the constructor and log it. What happens?
 *   b) Revert. Instead copy the name into a plain field in ngOnInit:
 *      `protected nameCopy = ''; ngOnInit() { this.nameCopy = this.student().name; }`
 *      Show `nameCopy` next to `student().name`. Then change the student in the parent
 *      (toggle active is enough to create a new object). Which one is stale and why?
 *   Revert again.
 */
@Component({
  selector: 'app-student-card',
  template: `<p class="hint">StudentCard: do uzupełnienia</p>`,
})
export class StudentCard {}
