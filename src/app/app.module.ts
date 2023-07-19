import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ResourcesModule } from './resources/resources.module';
import { TitleModule } from './title/title.module';
import { ContentModule } from './content/content.module';
import { DescriptionModule } from './description/description.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ContentButtonModule } from './content-button/content-button.module';
import { CodeModule } from './code/code.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProblemComponent } from './problem/problem.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';
import { ListRawComponent } from './list-raw/list-raw.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProblemComponent,
        NotFoundComponent,
        ListComponent,
        ListRawComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ResourcesModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        ToolbarModule,
        ContentButtonModule,
        CodeModule,
        NavbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
