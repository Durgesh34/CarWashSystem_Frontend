import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { AlertService } from '../Services/alert.service';
import { Router } from '@angular/router';
import { order } from '../Models/addonModel';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'cws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName: string | undefined;
  role: string | undefined;
  showUserOrders: boolean = false;
  userOrders: order[] = [];

  constructor(public sign: SignupserviceService,
    private alert: AlertService,
    private route: Router,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.userName = this.sign.getUserName();
    this.role = this.sign.getUserRoles();
  }

  logout() {
    console.log("logout");
    this.sign.logout();
    this.alert.show("Logout Successfully", 'red', 1500);
    this.route.navigate(['/login']);
  }

 
}
