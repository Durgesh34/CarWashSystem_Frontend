
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  order } from '../Models/addonModel';
import { payment } from '../Models/paymentModel';

@Injectable({
    providedIn: 'root'
  })

export class PaymentService
{


    basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }


Addpayment(Addpayment:payment): Observable<payment[]>{
    console.log('1234')
    return this.http.post<payment[]>(this.basApiUrl + '/api/Payment',Addpayment);
   
   }


getAllPayment(): Observable<payment[]>{
    return this.http.get<payment[]>(this.basApiUrl + '/api/Payment');
   }

  deletePayment(id:number): Observable<payment>{
    return this.http.delete<payment>(this.basApiUrl + '/api/Payment/'+id);
  }
}