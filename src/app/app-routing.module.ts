import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { ProblemComponent } from './problem/problem.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { animation: 'isLeft'},
    },
    {
        path: 'resources',
        component: ResourcesComponent,
    },
    {
        path: 'problem',
        component: ProblemComponent,
        data: { animation: 'isRight'},
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
