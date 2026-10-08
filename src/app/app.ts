import { Component, VERSION } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { LESSONS } from './lessons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="shell">
      <nav>
        <a routerLink="/" class="brand">Signals lab</a>
        @for (lesson of lessons; track lesson.path) {
          @if (lesson.ready) {
            <a [routerLink]="'/' + lesson.path" routerLinkActive="active">{{ lesson.title }}</a>
          } @else {
            <span class="locked">{{ lesson.title }}</span>
          }
        }
        <p class="hint">Angular {{ angularVersion }}</p>
      </nav>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .shell {
      display: grid;
      grid-template-columns: 240px 1fr;
      min-height: 100vh;
    }
    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 16px;
      border-right: 1px solid var(--border);
    }
    nav a,
    nav .locked {
      padding: 6px 10px;
      border-radius: 8px;
      text-decoration: none;
    }
    nav a.active {
      background: var(--panel);
    }
    .brand {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .locked {
      color: var(--muted);
    }
    main {
      padding: 24px 32px;
      max-width: 900px;
    }
    @media (max-width: 700px) {
      .shell {
        grid-template-columns: 1fr;
      }
      nav {
        border-right: 0;
        border-bottom: 1px solid var(--border);
      }
    }
  `,
})
export class App {
  protected readonly angularVersion = VERSION.full;
  protected readonly lessons = LESSONS;
}
