import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeZh from '@angular/common/locales/zh-Hans';
import {registerLocaleData} from '@angular/common';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule} from '@angular/forms';
import {ClusterComponent} from './cluster/cluster.component';
import {AddComponent} from './cluster/add/add.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ClusterModule} from './cluster/cluster.module';
import {ClusterRoutingModule} from './cluster/cluster-routing.module';

registerLocaleData(localeZh, 'zh-Hans');


@NgModule({
  declarations: [
    AppComponent,
    ClusterComponent,
    AddComponent,
    DashbordComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule,
    ClusterModule,
    ClusterRoutingModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'zh-Hans'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
