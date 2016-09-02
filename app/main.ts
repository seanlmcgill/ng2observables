/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import './rxjs-operators';

enableProdMode();

import { AppModule } from './app.module';

//platformBrowser().bootstrapModuleFactory(AppModule); //TODO: determine how to get ahead of time compile working NgModuleFactory?
platformBrowserDynamic().bootstrapModule(AppModule);