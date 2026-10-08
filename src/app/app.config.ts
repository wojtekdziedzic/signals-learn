import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Route params land directly in signal inputs (module 3 and 7).
    provideRouter(routes, withComponentInputBinding()),
    // Needed later by httpResource (module 7).
    provideHttpClient(withFetch()),
    // No zone.js and no provideZonelessChangeDetection(): zoneless is the default
    // since Angular 20. Module 2 explains what that means.
  ],
};
