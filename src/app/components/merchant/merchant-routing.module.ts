import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantComponent } from './merchant.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
