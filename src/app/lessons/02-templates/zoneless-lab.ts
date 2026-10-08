import { Component, signal, computed, DestroyRef, inject } from '@angular/core';

import { Level, SEED_STUDENTS, Student } from '../01-basics/student.model';

type LevelOrAll = Level | 'all';
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
    <button (click)="onClick()">Click me</button>
    <p>{{ plainTicks }}</p>
    <p>{{ signalTicks() }}</p>
    <p>{{ plainClicks }}</p>
    <div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;">
      <select name="levels" id="levels" [value]="level()" (change)="onLevelChange($event)">
        @for (level of levels; track level) {
          <option value="{{ level }}">{{ level }}</option>
        }
      </select>
      <label for="onlyActive"
        ><input
          id="onlyActive"
          type="checkbox"
          [checked]="onlyActive()"
          (change)="onlyActive.update((v) => !v)"
        />Tylko aktywni</label
      >
    </div>
    @let count = filtered().length;
    <p>Widocznych: {{ count }}</p>
    @for (student of filtered(); track student.id) {
      <p [class.first]="$first">
        {{ $index + 1 }} {{ student.name }} {{ student.subject }}
        {{ student.levelLabel }}
        {{ student.active ? 'aktywny' : 'nieaktywny' }}
      </p>
    } @empty {
      <p>Brak uczniów dla tych filtrów</p>
    }
  `,
})
export class ZonelessLab {
  protected readonly students = signal<readonly Student[]>(SEED_STUDENTS);
  protected readonly level = signal<LevelOrAll>('all');
  protected readonly levels: readonly LevelOrAll[] = ['all', 'podstawowa', 'liceum', 'matura'];
  protected readonly onlyActive = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  protected plainTicks = 0;
  protected plainClicks = 0;

  protected readonly signalTicks = signal(0);

  protected readonly filtered = computed(() => {
    const level = this.level();
    const onlyActive = this.onlyActive();

    return this.students()
      .filter((s) => (level === 'all' || s.level === level) && (!onlyActive || s.active))
      .map((student) => ({
        ...student,
        levelLabel: this.toLevelLabel(student.level),
      }));
  });

  constructor() {
    const interval = setInterval(() => {
      this.plainTicks = this.plainTicks + 1;
      this.signalTicks.update((value) => value + 1);
      console.log('tick');
    }, 1000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  onClick(): void {
    this.plainClicks = this.plainClicks + 1;
  }

  protected onLevelChange($event: Event): void {
    const level = ($event.target as HTMLSelectElement).value;
    this.level.set(level as LevelOrAll);
  }

  protected toLevelLabel(level: Level): string {
    console.log('levelLabel', level);
    switch (level) {
      case 'podstawowa':
        return 'SP';
      case 'liceum':
        return 'LO';
      case 'matura':
        return 'Matura';
    }
  }
}
