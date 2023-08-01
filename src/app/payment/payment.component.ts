import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { TotalAmountService } from '../Services/TotalAmount.service';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../Services/payment.service';
import { payment } from '../Models/paymentModel';

@Component({
  selector: 'cws-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: payment[] = [];
  name = this.signUpService.getUserName();
  isAdmin: boolean = false;
  userId = this.signUpService.getUserId();

  pay: payment = {
    cardHolderName: this.name,
    cardType: '',
    cardNumber: '',
    cvv: '',
    totalAmount: 0,
    expiryDate:new Date(),
    userId: this.userId
  };

  constructor(
    private signUpService: SignupserviceService,
    private totalAmountService: TotalAmountService,
    private paymentService: PaymentService,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit() {
    this.totalAmountService.totalAmount$.subscribe((totalAmount) => {
      this.pay.totalAmount = totalAmount;
      const userRole = this.signUpService.getUserRoles();
      this.isAdmin = userRole === 'Admin';
      this.getAllPayments(); // Subscribe to result to execute HTTP request
    });
  }

  Addpayment() {
  
    this.pay.cardHolderName = this.name; 
    console.log ("triggered");
    this.paymentService.Addpayment(this.pay).subscribe({
      next: (response) => {
        console.log(response);

        console.log("completed")
        // After adding the order, update the orders list
        this.getAllPayments();
      }
    })
  }

  

  getAllPayments() {
    // Call your PaymentService function to get all payments
    this.paymentService.getAllPayment().subscribe((payments) => {
      this.payments = payments; // Update the payments array with the retrieved payments
    });
  }

  deletePayment(paymentId: number) {
    this.paymentService.deletePayment(paymentId).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllPayments(); // Update payments array after deleting the payment
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
