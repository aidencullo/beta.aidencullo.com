import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { DescriptionModule } from '../description/description.module';

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
        ContentModule,
        DescriptionModule,
    ],
    exports: [
        ResourcesComponent,
    ],
})
export class ResourcesModule { }
