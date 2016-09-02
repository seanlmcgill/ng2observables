/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './rxjs-operators';

enableProdMode();

import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);