import { Component, OnInit } from '@angular/core';
import { order } from '../Models/addonModel';
import { SignupserviceService } from '../Services/signupservice.service';
import { OrderService } from '../Services/order.service';
import { AlertService } from '../Services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-orderdisplay',
  templateUrl: './orderdisplay.component.html',
  styleUrls: ['./orderdisplay.component.css']
})
export class OrderdisplayComponent implements OnInit{

  

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
  
    
  
    toggleUserOrders() {
      const userId = this.sign.getUserId();; // Assuming you have a method to get user ID
      if (userId) {
        this.orderService.getOrdersByUserId(userId)
          .subscribe(orders => {
            this.userOrders = orders;
            this.showUserOrders = true;
            this.route.navigate(['/orderdisplay']);
          });
      }
    }
}
