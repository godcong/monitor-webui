import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'cluster', loadChildren: './cluster/cluster.module#ClusterModule'},
  {path: 'dashboard', component: DashbordComponent},
  {path: '**', component: PageNotFoundComponent},
];
const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, config)
  ]
})
export class AppRoutingModule {
}
