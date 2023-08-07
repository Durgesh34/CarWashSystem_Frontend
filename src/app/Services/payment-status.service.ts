import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { order } from '../Models/addonModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentStatusService {

  private orderSource = new BehaviorSubject<order | null>(null);
  order$ = this.orderSource.asObservable();
  
  constructor() {}

  private paymentCompleted: boolean = false;

  getPaymentCompleted(): boolean {
    return this.paymentCompleted;
  }

  setPaymentCompleted(value: boolean): void {
    this.paymentCompleted = value;
  }


  setOrder(order: order) {
    this.orderSource.next(order);
  }
}

