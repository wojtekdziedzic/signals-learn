import { Component } from '@angular/core';

/*
 * MODULE 9, part 2 of 2: a page on top of the store
 *
 * Step 5. The component gets thin
 *   - Inject the store with `private readonly store = inject(StudentsStore)`.
 *   - The template reads store selectors and calls store methods. The component
 *     itself holds no state at all.
 *
 * Step 6. Two components, one store
 *   - Add a small summary component (counters) reading the SAME store.
 *   - Change something in one place and watch the other update. No inputs, no outputs.
 *
 * Step 7. Scope
 *   - Move the store from `providedIn: 'root'` to the route's providers.
 *   - What changes when you navigate away and come back? When is each option right?
 *
 * Interview question:
 *   "Signal store w serwisie vs NgRx vs NgRx SignalStore: kiedy co wybierasz?"
 */
@Component({
  selector: 'app-store-page',
  template: `
    <h1>Moduł 9: stan w serwisie</h1>
    <p class="hint">Zacznij od students-store.ts, potem wróć tutaj.</p>
  `,
})
export class StorePage {}
