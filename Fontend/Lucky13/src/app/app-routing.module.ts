import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./Trong/signup/signup.module').then(m => m.SignupModule) },
  { path: 'ConnectSocket', loadChildren: () => import('./Duc/connect-socket/connect-socket.module').then(m => m.ConnectSocketModule) },
  { path: 'aboutus', loadChildren: () => import('./Thang/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'sigin', loadChildren: () => import('./Thang/signin/signin.module').then(m => m.SigninModule) },
  { path: 'navBar', loadChildren: () => import('./Long/pages/home/components/nav-bar/nav-bar.component').then(m => m.NavBarComponent) },
  { path: 'home', loadChildren: () => import('./Long/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'play', loadChildren: () => import('./Long/pages/play/play.module').then(m => m.PlayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
