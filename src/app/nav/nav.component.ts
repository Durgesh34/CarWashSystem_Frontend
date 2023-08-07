import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { AlertService } from '../Services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

userName:string | undefined ;
role:string | undefined;

constructor(public sign:SignupserviceService,
  private alert:AlertService,
  private route:Router
  ){}

  ngOnInit(): void {
    this.userName = this.sign.getUserName();
    this.role=this.sign.getUserRoles();
  }
  
logout(){

console.log("logout");
this.sign.logout()
this.alert.show("Logout Successfully",'red',1500);
this.route.navigate(['/login']);

}



}
