import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignupserviceService } from '../Services/signupservice.service';
import { order } from '../Models/addonModel';
import { OrderService } from '../Services/order.service';
import { TotalAmountService } from '../Services/TotalAmount.service';
import { Router } from '@angular/router';
import { ValidationService } from '../Services/validation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmaiService } from '../Services/emai.service';

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
  WasherID=this.signUpService.getUserId();
  isAdmin: boolean = false;
  isWasher: boolean = false;
  form!: FormGroup  // Add the form group

  addorder: order = {
    name: this.name,
    scheduledatetime: new Date(),
    pickUpPoint: '',
    totalAmount: 0,
    carModel: '',
    carNumber: '',
    userId: this.user,
    washingStatus: '',
    washerId:''

  };

  selectedOrderIndex: number = -1; // Initialize with -1 to indicate no order selected

  constructor(
    private router: Router,
    private signUpService: SignupserviceService,
    private orderservice: OrderService,
    private totalAmountService: TotalAmountService,
    private http: HttpClient,
    private validationService: ValidationService, // Inject the ValidationService
    private formBuilder: FormBuilder,
    private emailService: EmaiService 
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.totalAmountService.totalAmount$.subscribe((totalAmount) => {
      this.addorder.totalAmount = totalAmount;

      const userRole = this.signUpService.getUserRoles();
      this.isAdmin = userRole === 'Admin';
      this.isWasher = userRole === 'Washer';
      this.getAllOrders();
    });
  }

 // Inside the initializeForm() method
 initializeForm() {
  this.form = this.formBuilder.group({
    carModel: ['', [Validators.required, this.validationService.validateCarModel]],
    carNumber: ['', [Validators.required, this.validationService.validateCarNumber]],
    pickupPoint: ['', [Validators.required, this.validationService.validatePickupPoint]]
  });
}


Addorder() {
  

  this.addorder.name = this.name;
  this.orderservice.Addorder(this.addorder).subscribe({
    next: (response) => {
      console.log(response);

      this.totalAmountService.setTotalAmount(this.addorder.totalAmount);
      this.router.navigate(['/payment']);

      this.getAllOrders();
    }
  });
}


 

  getAllOrders() {
    this.orderservice.getAllOrder().subscribe((orders) => {
      this.addons = orders;
      if (this.isWasher) {
        this.addons = this.addons.filter((order) => order.washingStatus !== 'approved');
      }
    });
  }

 
    
  

  deleteOrder(orderId: number) {
    this.orderservice.deleteOrder(orderId).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllOrders();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateOrderStatus(order: order, index: number) {
    if (!order) {
      return; // Exit if order is undefined
    }
  
    this.selectedOrderIndex = index;
    order.washingStatus = 'approved';
    order.washerId = this.isWasher ? this.WasherID : ''; // Set washerId to the WasherID if the user is a washer
  
    const orderId = order.id?.toString();
  
    if (orderId) {
      this.orderservice.updateOrder(orderId, order).subscribe(() => {
        // Remove the approved order from the list
        this.addons.splice(index, 1);
        this.selectedOrderIndex = -1;
  
        // Navigate to the approved orders page
        
      });
    }
  }
  
  rejectOrderStatus(order: order, index: number) {
    if (!order) {
      return; // Exit if order is undefined
    }
  
    this.selectedOrderIndex = index;
    order.washingStatus = 'rejected';
    order.washerId = this.isWasher ? this.WasherID : ''; // Set washerId to the WasherID if the user is a washer
  
    const orderId = order.id?.toString();
  
    if (orderId) {
      this.orderservice.updateOrder(orderId, order).subscribe(() => {
        // Remove the rejected order from the list
        this.addons.splice(index, 1);
        this.selectedOrderIndex = -1;
      });
    }
  }
  

  //email:


  sendEmailForOrder(orderId: number) {
    this.emailService.sendOrderConfirmationEmail(orderId).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
        // You can display a success message or perform other actions here
      },
      (error) => {
        console.error('Error sending email:', error);
        // Handle error, display error message, etc.
      }
    );
  }


}