import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentButtonModule } from '../content-button/content-button.module';
import { AppRoutingModule } from '../app-routing.module';

import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
    declarations: [
        ToolbarComponent,
    ],
    imports: [
        CommonModule,
        ContentButtonModule,
        AppRoutingModule,
    ],
    exports: [
        ToolbarComponent,
    ],
})
export class ToolbarModule { }
