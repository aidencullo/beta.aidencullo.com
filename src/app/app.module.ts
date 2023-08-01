import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TitleModule } from './title/title.module';
import { ContentModule } from './content/content.module';
import { DescriptionModule } from './description/description.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ContentButtonModule } from './content-button/content-button.module';
import { CodeModule } from './code/code.module';
import { NavbarModule } from './navbar/navbar.module';
import { ListRawModule } from './list-raw/list-raw.module';
import { ListModule } from './list/list.module';
import { NotFoundModule } from './not-found/not-found.module';

import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';

@NgModule({
    declarations: [
        AppComponent,
        ProblemComponent,
    ],
    imports: [
        BrowserModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        ToolbarModule,
        ContentButtonModule,
        CodeModule,
        NavbarModule,
        ListRawModule,
        ListModule,
        AppRoutingModule,
        NotFoundModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
