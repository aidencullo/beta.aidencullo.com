import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleModule } from '../title/title.module';
import { ContentModule } from '../content/content.module';
import { DescriptionModule } from '../description/description.module';
import { ListModule } from '../list/list.module';
import { ContentButtonModule } from '../content-button/content-button.module';

import { ResourcesComponent } from './resources/resources.component';

@NgModule({
    declarations: [
        ResourcesComponent,
    ],
    imports: [
        CommonModule,
        TitleModule,
        ContentModule,
        DescriptionModule,
        ListModule,
        ContentButtonModule,
        RouterModule,
    ],
    exports: [
        ResourcesComponent,
    ],
})
export class ResourcesModule { }
