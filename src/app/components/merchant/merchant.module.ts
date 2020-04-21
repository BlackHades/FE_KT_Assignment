import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './merchant-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
//import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import {MerchantComponent} from './merchant.page';
import { Merchant } from './merchant.model';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    FolderPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: Merchant
      }
    ])
  ],

  declarations: [MerchantComponent, MultiFileUploadComponent]
})
export class MerchantPageModule {
}
