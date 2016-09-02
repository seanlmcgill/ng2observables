/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { platformBrowser } from '@angular/platform-browser';
var core_1 = require('@angular/core');
require('./rxjs-operators');
core_1.enableProdMode();
var app_module_1 = require('./app.module');
//platformBrowser().bootstrapModuleFactory(AppModule); //TODO: determine how to get ahead of time compile working NgModuleFactory?
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
