import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRawComponent } from './list-raw/list-raw.component';


@NgModule({
    declarations: [
        ListRawComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ListRawComponent,
    ],
})
export class ListRawModule { }
