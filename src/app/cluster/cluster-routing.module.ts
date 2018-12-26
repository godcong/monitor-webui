import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {ClusterComponent} from './cluster.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ListComponent} from './list/list.component';
import {ChangeComponent} from './change/change.component';

const routes: Routes = [
  {
    path: '',
    component: ClusterComponent,
    children: [
      {path: 'add', component: AddComponent},
      {path: 'list', component: ListComponent},
      {path: 'change', component: ChangeComponent},
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {path: '**', component: PageNotFoundComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule {
}
