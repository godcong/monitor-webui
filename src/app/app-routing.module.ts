import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClusterComponent} from './cluster/cluster.component';

const routes: Routes = [
  {path: 'cluster', component: ClusterComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ]
})
export class AppRoutingModule {
}
