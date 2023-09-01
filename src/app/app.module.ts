import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlansComponent } from './plans/plans.component';

import { SignupComponent } from './signup/signup.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { WasherpageComponent } from './washerpage/washerpage.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarserviceComponent } from './carservice/carservice.component';
import { UserComponent } from './user/user.component';
import { WashpackageComponent } from './washpackage/washpackage.component';
import { AddonComponent } from './addon/addon.component';
import { EditwashpackageComponent } from './editwashpackage/editwashpackage.component';
import { EditaddonComponent } from './editaddon/editaddon.component';
import { Animation1Component } from './animation/animation1/animation1.component';
import { ContactComponent } from './contact/contact.component';
import { SampleComponent } from './sample/sample.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LocationComponent,
    LoginComponent,
    NavComponent,
    PlansComponent,

    SignupComponent,
    AdminpageComponent,
    WasherpageComponent,
    CarserviceComponent,
    UserComponent,
    WashpackageComponent,
    AddonComponent,
    EditwashpackageComponent,
    EditaddonComponent,
    Animation1Component,
    ContactComponent,
    SampleComponent,
    PaymentComponent,
    OrderComponent,
    OrderdisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
