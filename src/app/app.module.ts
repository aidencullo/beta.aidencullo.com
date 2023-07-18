import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ResourcesModule } from './resources/resources.module';
import { TitleModule } from './title/title.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './content/content.component';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProblemComponent } from './problem/problem.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContentButtonComponent } from './content-button/content-button.component';
import { CodeComponent } from './code/code.component';
import { ListComponent } from './list/list.component';
import { ListRawComponent } from './list-raw/list-raw.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContentComponent,
        DescriptionComponent,
        NavbarComponent,
        ToolbarComponent,
        ProblemComponent,
        NotFoundComponent,
        ContentButtonComponent,
        CodeComponent,
        ListComponent,
        ListRawComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ResourcesModule,
        TitleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
