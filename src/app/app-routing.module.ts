import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'merchant/',
    pathMatch: 'full'
  },
  {
    path: 'merchant/:id',
    loadChildren: () => import('./components/merchant/merchant.module').then(m => m.MerchantPageModule,
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
