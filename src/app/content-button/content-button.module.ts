import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentButtonComponent } from './content-button/content-button.component';

@NgModule({
    declarations: [
        ContentButtonComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ContentButtonComponent,
    ],
})
export class ContentButtonModule { }
