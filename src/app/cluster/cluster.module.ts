import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClusterRoutingModule} from './cluster-routing.module';
import {ClusterComponent} from './cluster.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatFormFieldControl, MatFormFieldModule,
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
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ListComponent} from './list/list.component';
import {ChangeComponent} from './change/change.component';

const PAGES_COMPONENTS = [
  ClusterComponent,
  AddComponent,
  ListComponent,
  ChangeComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [...PAGES_COMPONENTS, ListComponent, ChangeComponent],
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
    MatCheckboxModule,
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
