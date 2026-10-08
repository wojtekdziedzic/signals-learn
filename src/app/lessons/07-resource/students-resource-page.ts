import { Component } from '@angular/core';

/*
 * MODULE 7: resource() and httpResource()
 *
 * Data in this lesson comes from static files in `public/data/`:
 *   /data/students.json        - the whole list
 *   /data/students/<id>.json   - one student (ids 1-6)
 *
 * Step 1. resource()
 *   - `selectedId`: a writable signal, 1 by default, with buttons 1-6.
 *   - `student = resource({ params: () => ({ id: this.selectedId() }), loader: ... })`
 *     where the loader fetches /data/students/<id>.json.
 *   - Render all four states: idle/loading, error, empty, value.
 *     Hint: `student.isLoading()`, `student.error()`, `student.value()`, `student.status()`.
 *
 * Step 2. Cancellation
 *   - The loader receives an AbortSignal. Pass it to fetch.
 *   - Add an artificial delay inside the loader, click through the ids quickly and
 *     check the Network tab: requests for abandoned ids must be cancelled.
 *   - Why does this matter more than it looks? (Think: late answer overwrites the new one.)
 *
 * Step 3. httpResource()
 *   - Replace the manual loader with `httpResource<Student>(() => '/data/students/' + id)`.
 *   - It needs provideHttpClient, already configured in app.config.ts.
 *   - Compare both versions: what is shorter, what did you lose?
 *
 * Step 4. Reload and local edits
 *   - A "Odśwież" button calling `student.reload()`.
 *   - Let the user edit the loaded student's name locally (hint: resource value is a
 *     writable signal) and show what happens to that edit after a reload.
 *
 * Step 5. Break it on purpose
 *   - Point the loader at a missing id (e.g. 99). Which state does the resource enter,
 *     and what does `value()` hold then?
 *
 * Interview question:
 *   "resource vs HttpClient z subscribe: co zyskujesz, czego nie ma w resource?"
 */
@Component({
  selector: 'app-students-resource-page',
  template: `
    <h1>Moduł 7: resource i httpResource</h1>
    <p class="hint">Uzupełnij wg komentarza w pliku.</p>
  `,
})
export class StudentsResourcePage {}
