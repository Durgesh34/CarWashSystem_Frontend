
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  order } from '../Models/addonModel';

@Injectable({
    providedIn: 'root'
  })

export class OrderService
{


    basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }


Addorder(Addorder:order): Observable<order[]>{
  
    return this.http.post<order[]>(this.basApiUrl + '/api/Order',Addorder);
   }


getAllOrder(): Observable<order[]>{
    return this.http.get<order[]>(this.basApiUrl + '/api/Order');
   }

  deleteOrder(id:number): Observable<order>{
    return this.http.delete<order>(this.basApiUrl + '/api/Order/'+id);
  }

  updateOrder(id:string ,updateOrder:order): Observable<order>{
    return this.http.put<order>(this.basApiUrl+ '/api/Order/'+id,updateOrder);
  }

}