
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7201/api/Auth';

  constructor(private http: HttpClient) {}



  login(data:any)
  {
    this.http.post("https://localhost:7201/api/Auth/login",data).subscribe((result)=>
    {
      console.warn(result);
    })
  }
}
