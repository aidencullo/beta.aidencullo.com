import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found.routing.module';

import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { DescriptionModule } from '../description/description.module';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        NotFoundRoutingModule,
    ],
    exports: [
        NotFoundComponent,
    ],
})
export class NotFoundModule { }
