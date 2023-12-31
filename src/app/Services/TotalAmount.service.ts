// total-amount.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TotalAmountService {
//   private totalAmountSource = new BehaviorSubject<number>(0);
//   totalAmount$ = this.totalAmountSource.asObservable();

//   setTotalAmount(amount: number) {
//     this.totalAmountSource.next(amount);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalAmountService {
  private totalAmountSource = new BehaviorSubject<number>(0);
  totalAmount$ = this.totalAmountSource.asObservable();

  private paymentCompletedSource = new BehaviorSubject<boolean>(false);
  paymentCompleted$ = this.paymentCompletedSource.asObservable();

  constructor() {}

  setTotalAmount(totalAmount: number) {
    this.totalAmountSource.next(totalAmount);
  }

  getPaymentCompleted() {
    return this.paymentCompletedSource.value;
  }

  setPaymentCompleted(completed: boolean) {
    this.paymentCompletedSource.next(completed);
  }
}
