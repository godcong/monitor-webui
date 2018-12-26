import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeZh from '@angular/common/locales/zh-Hans';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(localeZh, 'zh-Hans');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'},
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
