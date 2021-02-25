import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //Trong
  { path: 'signup', loadChildren: () => import('./Trong/signup/signup.module').then(m => m.SignupModule) },
  { path: 'xuatbai', loadChildren: () => import('./Trong/xuatbai/xuatbai.module').then(m => m.XuatbaiModule) },

  //Duc
  { path: 'ConnectSocket', loadChildren: () => import('./Duc/connect-socket/connect-socket.module').then(m => m.ConnectSocketModule) },

  //Thang
  { path: 'aboutus', loadChildren: () => import('./Thang/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'sigin', loadChildren: () => import('./Thang/signin/signin.module').then(m => m.SigninModule) },

  //Long
  { path: 'home', loadChildren: () => import('./Long/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'play', loadChildren: () => import('./Long/pages/play/play.module').then(m => m.PlayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
