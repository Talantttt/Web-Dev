import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './products.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const productsConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
