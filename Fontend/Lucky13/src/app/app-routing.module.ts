import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'signin', loadChildren: () => import('./Thang/signin/signin.module').then(m => m.SigninModule) }, { path: 'aboutus', loadChildren: () => import('./Thang/aboutus/aboutus.module').then(m => m.AboutusModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
