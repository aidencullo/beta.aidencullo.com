import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProblemComponent } from './problem/problem.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'problem', component: ProblemComponent },
    { path: 'list/:id', component: ListComponent },
    { path: '404', component: ProblemComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
