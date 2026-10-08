import { Component } from '@angular/core';

/*
 * MODULE 8: interop with RxJS
 *
 * Signals have no notion of time. Debounce, cancellation and retries stay in RxJS.
 * This lesson is about the seam between the two worlds.
 *
 * Step 1. toSignal
 *   - A timer: `interval(1000)` turned into a signal with `toSignal(..., { initialValue: 0 })`.
 *   - Display it. Note what you did NOT have to write: no subscribe, no unsubscribe.
 *   - Leave the page and come back: is the old subscription still running? Why?
 *
 * Step 2. toObservable + debounce
 *   - A search box writing into a `query` signal.
 *   - `toObservable(this.query)` piped through debounceTime(300) and distinctUntilChanged(),
 *     then switchMap to a fetch of /data/students.json filtered by name.
 *   - Back to a signal with toSignal. Type fast and count the requests.
 *
 * Step 3. rxResource
 *   - Rewrite step 2 using `rxResource({ params: ..., stream: ... })`.
 *   - Which parts of the RxJS pipeline became unnecessary, and which stayed?
 *
 * Step 4. takeUntilDestroyed
 *   - Subscribe to something manually (an interval is enough) and log in the callback.
 *   - Navigate away and watch the console. Then add takeUntilDestroyed() and repeat.
 *
 * Step 5. The decision rule
 *   - Write three bullet points: what you keep in signals, what you keep in RxJS,
 *     and where the boundary runs in a project like yours.
 *
 * Interview question:
 *   "Gdzie RxJS nadal wygrywa z sygnałami i dlaczego?"
 */
@Component({
  selector: 'app-rxjs-interop-page',
  template: `
    <h1>Moduł 8: interop z RxJS</h1>
    <p class="hint">Uzupełnij wg komentarza w pliku.</p>
  `,
})
export class RxjsInteropPage {}
