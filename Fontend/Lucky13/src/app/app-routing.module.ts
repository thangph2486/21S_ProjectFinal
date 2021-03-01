import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //Trong
  { path: 'signup', loadChildren: () => import('./Trong/signup/signup.module').then(m => m.SignupModule) },

  //Duc
  { path: 'ConnectSocket', loadChildren: () => import('./Duc/connect-socket/connect-socket.module').then(m => m.ConnectSocketModule) },

  //Thang
  { path: 'aboutus', loadChildren: () => import('./Thang/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'signin', loadChildren: () => import('./Thang/signin/signin.module').then(m => m.SigninModule) },

  //Long
  { path: 'home', loadChildren: () => import('./Long/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'play', loadChildren: () => import('./Long/pages/play/play.module').then(m => m.PlayModule) },
  { path: '', loadChildren: () => import('./Duc/all-page/all-page.module').then(m => m.AllPageModule) },
  { path: 'homeLogin', loadChildren: () => import('./Long/pages/home-login/home-login.module').then(m => m.HomeLoginModule) },
  { path: 'contact', loadChildren: () => import('./Long/pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'findroom', loadChildren: () => import('./Trong/findroom/findroom.module').then(m => m.FindroomModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
