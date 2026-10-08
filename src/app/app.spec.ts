import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

import { App } from './app';
import { routes } from './app.routes';
import { LESSONS } from './lessons';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('lists every lesson in the navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const text = (fixture.nativeElement as HTMLElement).querySelector('nav')?.textContent ?? '';
    for (const lesson of LESSONS) {
      expect(text).toContain(lesson.title);
    }
  });
});
