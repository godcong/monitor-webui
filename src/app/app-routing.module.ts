import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClusterComponent} from './cluster/cluster.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ClusterRoutingModule} from './cluster/cluster-routing.module';
import {ClusterModule} from './cluster/cluster.module';

const routes: Routes = [
  // {path: 'cluster', loadChildren: ClusterModule},
  {path: 'dashboard', component: DashbordComponent},
  {path: '**', component: PageNotFoundComponent},
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
