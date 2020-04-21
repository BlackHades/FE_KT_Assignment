import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MerchantComponent} from './components/merchant/merchant.component';
import {LoaderComponent} from './components/loader/loader.component';
import {MerchantService} from './components/merchant/merchant.service';
import {HttpClientModule} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@NgModule({
  declarations: [AppComponent, MerchantComponent, LoaderComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MerchantService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
