import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {ClusterComponent} from "./cluster.component";

const routes: Routes = [
  {
    path: '',
    component: ClusterComponent,
    children: [
      {path: 'add', component: AddComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule {
}
