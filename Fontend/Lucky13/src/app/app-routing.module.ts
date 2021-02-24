import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./Trong/signup/signup.module').then(m => m.SignupModule) },
  { path: 'xuatbai', loadChildren: () => import('./Trong/xuatbai/xuatbai.module').then(m => m.XuatbaiModule) },
  { path: 'ConnectSocket', loadChildren: () => import('./Duc/connect-socket/connect-socket.module').then(m => m.ConnectSocketModule) },
  { path: 'aboutus', loadChildren: () => import('./Thang/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'sigin', loadChildren: () => import('./Thang/signin/signin.module').then(m => m.SigninModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }