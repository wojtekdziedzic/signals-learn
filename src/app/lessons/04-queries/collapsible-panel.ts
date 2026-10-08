import { Component } from '@angular/core';

/*
 * MODULE 4, component 1 of 2: CollapsiblePanel (content queries)
 *
 * A wrapper the page puts content INTO. Everything between the tags is projected.
 *
 * Step 3. Content projection + contentChild
 *   - Project the content with <ng-content />.
 *   - `title`: required string input, rendered in the header.
 *   - `badge`: `contentChild<ElementRef<HTMLElement>>('badge')` - an OPTIONAL element
 *     the page may mark with #badge inside the projected content.
 *   - Show "(z odznaką)" in the header only when the query found something.
 *     Hint: contentChild returns a signal whose value is undefined when nothing matched,
 *     so you can read it straight in the template or in a computed.
 *   - A button that collapses/expands the projected content (plain signal).
 *
 * Question for chat: why is `badge` undefined on the first render but fine later,
 * and why does that NOT cause the dreaded ExpressionChangedAfterItHasBeenChecked here?
 */
@Component({
  selector: 'app-collapsible-panel',
  template: `<p class="hint">CollapsiblePanel: do uzupełnienia</p>`,
})
export class CollapsiblePanel {}
