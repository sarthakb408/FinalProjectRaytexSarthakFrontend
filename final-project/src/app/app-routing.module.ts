import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerWatchlistComponent } from './container-watchlist/container-watchlist.component';
import { FeesPaymentComponent } from './fees-payment/fees-payment.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'landing-page',component:LandingPageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'watchlist',component:HomePageComponent ,children:[
    {path:'container-watchlist',component:ContainerWatchlistComponent},
    {path:'fees-payment',component:FeesPaymentComponent}
  ]},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'register-user',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
