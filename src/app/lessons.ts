export interface LessonInfo {
  readonly path: string;
  readonly title: string;
  /** Flip to true when the lesson folder and route exist. */
  readonly ready: boolean;
}

export const LESSONS: readonly LessonInfo[] = [
  { path: '01-basics', title: '1. signal i computed', ready: true },
  { path: '02-templates', title: '2. Szablon i zoneless', ready: true },
  { path: '03-component-api', title: '3. input, output, model', ready: true },
  { path: '04-queries', title: '4. viewChild i spółka', ready: true },
  { path: '05-effects', title: '5. effect i untracked', ready: true },
  { path: '06-linked-signal', title: '6. linkedSignal', ready: true },
  { path: '07-resource', title: '7. resource i httpResource', ready: true },
  { path: '08-rxjs-interop', title: '8. Interop z RxJS', ready: true },
  { path: '09-store', title: '9. Stan w serwisie', ready: true },
  { path: '10-signal-forms', title: '10. Signal Forms', ready: true },
];
