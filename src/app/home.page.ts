import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Signals lab</h1>
    <p>
      Sandbox do nauki sygnałów w Angularze. Każdy moduł to jeden folder w
      <code>src/app/lessons/</code> z plikiem startowym, który uzupełniasz samodzielnie.
    </p>
    <p class="hint">Postęp i pytania otwarte: <code>PROGRESS.md</code> w korzeniu repo.</p>
  `,
})
export class HomePage {}
