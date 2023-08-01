import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { SignupserviceService } from '../Services/signupservice.service';
import { order } from '../Models/addonModel'; // Import only the order interface
import { OrderService } from '../Services/order.service';
import { TotalAmountService } from '../Services/TotalAmount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  baseUrl: string = environment.baseUrl;
  addons: order[] = [];
  user = this.signUpService.getUserId();
  name = this.signUpService.getUserName();
  isAdmin: boolean = false;

  addorder: order = {
    
    name: this.name,
    scheduledatetime: new Date(),
    pickUpPoint: '',
    totalAmount: 0,
    carModel: '',
    carNumber: '',
    userId: this.user,
  };

  constructor(
    private router: Router,
    private signUpService: SignupserviceService,
    private orderservice: OrderService,
    private totalAmountService: TotalAmountService,

    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit() {
    this.totalAmountService.totalAmount$.subscribe((totalAmount) => {
      this.addorder.totalAmount = totalAmount;

      // Get the user's role from AuthService and set the isAdmin variable accordingly
      const userRole = this.signUpService.getUserRoles();
      this.isAdmin = userRole === 'Admin';

      // Call the function to get all orders from the backend API
      this.getAllOrders();
    });
  }

  Addorder() {
    

    this.addorder.name = this.name; 
    this.orderservice.Addorder(this.addorder).subscribe({
      next: (response) => {
        console.log(response);

        this.totalAmountService.setTotalAmount(this.addorder.totalAmount);
        this.router.navigate(['/payment']);
        // After adding the order, update the orders list
        this.getAllOrders();
      }
    });
  }

  getAllOrders() {
    // Call your OrderService function to get all orders
    this.orderservice.getAllOrder().subscribe((orders) => {
      this.addons = orders; // Update the addons array with the retrieved orders
    });
  }

  deleteOrder(orderId: number) {
    this.orderservice.deleteOrder(orderId).subscribe({
      next: (response) => {
        console.log(response);
        // After deleting the order, update the orders list
        this.getAllOrders();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
