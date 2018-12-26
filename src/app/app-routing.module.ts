import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'cluster', loadChildren: './cluster/cluster.module#ClusterModule'},
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
