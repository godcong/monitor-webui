import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {PageNotFoundComponent} from './cluster/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'cluster', loadChildren: './cluster/cluster.module#ClusterModule'},
  // {path: 'dashboard', component: DashbordComponent},
  {path: '', redirectTo: 'cluster', pathMatch: 'full'},
  {path: '**', redirectTo: 'cluster'},
];
const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, config)
  ]
})
export class AppRoutingModule {
}
