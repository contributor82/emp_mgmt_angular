import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// provideHttpClient to be added in providers when working with API invocation.
// provideZoneChangeDetection is added for Change detection purpose.
// Change detection works by using Zone.js
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
