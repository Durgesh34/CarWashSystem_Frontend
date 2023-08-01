import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signupModel } from '../Models/signupModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllUser(): Observable<signupModel[]>{
   return this.http.get<signupModel[]>(this.basApiUrl + '/api/User');
  }

  deleteUser(id?:number): Observable<signupModel>{
    return this.http.delete<signupModel>(this.basApiUrl + '/api/User/'+id);
  }

}
