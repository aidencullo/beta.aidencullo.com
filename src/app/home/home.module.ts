import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { DescriptionModule } from '../description/description.module';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        NavbarModule,
        HomeRoutingModule,
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
