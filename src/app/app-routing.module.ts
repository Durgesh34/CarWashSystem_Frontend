import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { PlansComponent } from './plans/plans.component';
import { CarserviceComponent } from './carservice/carservice.component';
import { UserComponent } from './user/user.component';
import { washPackage } from './Models/washPackage';
import { WashpackageComponent } from './washpackage/washpackage.component';
import { AddonComponent } from './addon/addon.component';
import { EditwashpackageComponent } from './editwashpackage/editwashpackage.component';
import { ContactComponent } from './contact/contact.component';
import { WasherpageComponent } from './washerpage/washerpage.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { SampleComponent } from './sample/sample.component';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'admin-page',component:AdminpageComponent},
  {path:'about',component:AboutComponent},
  {path:'washing-points',component:LocationComponent},
  {path:'plans',component:PlansComponent},
  {path:'services',component:CarserviceComponent},
  {path:'admin-page',component:AdminpageComponent},
  {path:'user-list',component:UserComponent},
  {path:'wash-package',component:WashpackageComponent},
  {path:'addon-package',component:AddonComponent},
  {path:'washpackage/edit/:id',component:EditwashpackageComponent},
  {path:'washpackage/delete/:id',component:EditwashpackageComponent},
  {path:'addon/edit/:id',component:EditwashpackageComponent},
  {path:'contact',component:ContactComponent},
  {path:'washerpackage',component:WasherpageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'order',component:OrderComponent},
  {path:'sample',component:SampleComponent},
  {path:'carservice',component:CarserviceComponent},
  {path:'orderdisplay',component:OrderdisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
