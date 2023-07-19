import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        NavbarComponent,
    ],
})
export class NavbarModule { }
