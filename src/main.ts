import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Main } from './app/layouts/main/main';

bootstrapApplication(Main, appConfig)
  .catch((err) => console.error(err));
