import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProblemComponent } from './problem/problem.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
    import('./home/home.module').then(m =>
        m.HomeModule),
        data: { animation: 'isLeft'},
    },
    {
        path: 'problem',
        component: ProblemComponent,
        data: { animation: 'isRight'},
    },
    {
        path: 'resources',
        loadChildren: () =>
    import('./resources/resources.module').then(m =>
        m.ResourcesModule)
    },
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
