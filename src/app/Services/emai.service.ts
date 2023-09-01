import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmaiService {

  basApiUrl:string=environment.baseUrl;
  constructor(private http: HttpClient) { }


    
    sendOrderConfirmationEmail(orderId: number): Observable<any> {
      // Replace 'your-email-api-endpoint' with the actual API endpoint
      return this.http.post<any>(this.basApiUrl + '/api/Email', { orderId });
    }


  }

