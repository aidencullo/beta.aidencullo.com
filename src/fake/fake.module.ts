import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeComponent } from './fake.component';
import { AnotherFakeComponent } from './another-fake/another-fake.component';

@NgModule({
    declarations: [
        FakeComponent,
        AnotherFakeComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FakeComponent,
    ],
})
export class FakeModule { }
