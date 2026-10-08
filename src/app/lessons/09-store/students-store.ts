/*
 * MODULE 9, part 1 of 2: a signal store in a plain service
 *
 * No library. A service with signals is enough for most apps.
 *
 * Step 1. Shape
 *   - `@Injectable({ providedIn: 'root' })` class StudentsStore.
 *   - PRIVATE writable state: students, query, selectedId.
 *   - PUBLIC read-only views: `readonly students = this._students.asReadonly()`.
 *   - PUBLIC computed selectors: filtered, selected, activeCount.
 *   - PUBLIC methods as the only way to change state: setQuery, toggleActive,
 *     select, add, remove.
 *
 * Step 2. Why asReadonly matters
 *   - Expose the writable signal directly for a moment, change it from a component,
 *     and describe what that costs you in a real codebase.
 *
 * Step 3. Loading
 *   - Add `load()` fetching /data/students.json, plus `isLoading` and `error` signals.
 *   - Then rewrite it with resource() from module 7 and compare the two.
 *
 * Step 4. Tests (`students-store.spec.ts`)
 *   - The store needs NO TestBed component: `TestBed.inject(StudentsStore)` is enough.
 *   - Test selectors and methods directly. This is the payoff of keeping state out
 *     of components.
 */
export {};
