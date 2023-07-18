import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../title/title.module';
// import { ListComponent } from './list/list.component';
import { ResourcesComponent } from './resources/resources.component';
// import { ListRawComponent } from './list-raw/list-raw.component';

@NgModule({
    declarations: [
        // ListComponent,
        // ListRawComponent,
        ResourcesComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
    ],
    exports: [
        ResourcesComponent,
    ],
})
export class ResourcesModule { }
