import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/index';

@NgModule({
    imports: [ BrowserModule, FormsModule, CommonModule, HttpModule ],
    declarations: [ DashboardComponent, AppComponent ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: Window,  useValue: window },
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
