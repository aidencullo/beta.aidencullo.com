import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { DescriptionModule } from '../description/description.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CodeModule } from '../code/code.module';
import { ProblemRoutingModule } from './problem-routing.module';
import { ContentButtonModule } from '../content-button/content-button.module';

import { ProblemComponent } from './problem/problem.component';

@NgModule({
    declarations: [
        ProblemComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        NavbarModule,
        ProblemRoutingModule,
        CodeModule,
        ContentButtonModule,
    ],
    exports: [
        ProblemComponent,
    ],
})
export class ProblemModule { }
