import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ToolbarModule } from './toolbar/toolbar.module';
import { NotFoundModule } from './not-found/not-found.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ToolbarModule,
        AppRoutingModule,
        NotFoundModule,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
