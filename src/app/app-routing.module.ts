import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent}
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
