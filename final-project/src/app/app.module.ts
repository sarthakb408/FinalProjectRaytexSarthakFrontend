import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContainerWatchlistComponent } from './container-watchlist/container-watchlist.component';
import { FeesPaymentComponent } from './fees-payment/fees-payment.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContainerWatchlistComponent,
    FeesPaymentComponent,
    LoginPageComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
