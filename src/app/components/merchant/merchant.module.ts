import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './merchant-routing.module';
import {MerchantComponent} from './merchant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  ],
  declarations: [MerchantComponent]
})
export class FolderPageModule {
}
