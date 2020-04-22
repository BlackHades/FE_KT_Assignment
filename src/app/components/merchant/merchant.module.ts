import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './merchant-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
//import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import {MerchantComponent} from './merchant.page';
import { Merchant } from './merchant.model';
import { RouterModule, Routes } from '@angular/router';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';


const routes: Routes = [
  {
    path: '',
redirectTo: '/user',
    component: Merchant
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    FolderPageRoutingModule,
    RouterModule.forChild(routes),
  
   // RouterModule.forChild([
    //  {
      //  path: '',
      //  component: Merchant
    //  }
   // ])
 ],

  declarations: [MerchantComponent, MultiFileUploadComponent]
})
export class MerchantPageModule {
}
