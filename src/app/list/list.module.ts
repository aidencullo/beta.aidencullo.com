import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { ListRawModule } from '../list-raw/list-raw.module';

import { ListComponent } from './list/list.component';


@NgModule({
    declarations: [
        ListComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
        ContentModule,
        ListRawModule,
    ],
    exports: [
        ListComponent,
    ],
})
export class ListModule { }
