import { Component } from '@angular/core';

/*
 * MODULE 3, component 2 of 2: SearchBox (two-way binding with model)
 *
 * Step 4. Model
 *   - `query`: `model('')`. The input field reads it and writes back on every keystroke.
 *   - A "Wyczyść" button that sets it back to ''. It must also clear the parent's value.
 *   - Compare with the old way in chat: @Input() query + @Output() queryChange.
 */
@Component({
  selector: 'app-search-box',
  template: `<p class="hint">SearchBox: do uzupełnienia</p>`,
})
export class SearchBox {}
