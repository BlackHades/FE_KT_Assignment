import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './merchant-routing.module';
import {MerchantComponent} from './merchant.component';
import {FileUploadModule} from 'ng2-file-upload';
//import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import {Merchant} from './merchant.model';
import {RouterModule, Routes} from '@angular/router';
import {MultiFileUploadComponent} from '../multi-file-upload/multi-file-upload.component';


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
        FolderPageRoutingModule,
        FileUploadModule,
        FolderPageRoutingModule,
        RouterModule.forChild(routes),
        // RouterModule.forChild(),
    ],
    declarations: [MerchantComponent, MultiFileUploadComponent]
})
export class FolderPageModule {
}
