import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';

@Component({
  selector: 'cws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
constructor(public sign:SignupserviceService){}
logout(){
  console.log("logout");
this.sign.logout()}

}
