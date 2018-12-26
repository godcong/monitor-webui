import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClusterRoutingModule} from './cluster-routing.module';
import {ClusterComponent} from './cluster.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatOptionModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddComponent} from './add/add.component';

const PAGES_COMPONENTS = [
  ClusterComponent,
  AddComponent,
];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [
    CommonModule,
    ClusterRoutingModule,
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
  ]
})
export class ClusterModule {
}
