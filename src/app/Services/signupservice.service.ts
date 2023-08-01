import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signupModel } from '../Models/signupModel';
import { loginModel } from '../Models/loginmodel';
import { changePassword } from '../Models/changePassword';
import { statusModel } from '../Models/statusModel';
import { loginResponse } from '../Models/login-response';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private route: Router) {

  }
  
  isLoggedIn() {
    return !!this.getAccessToken();
  }

  login(model: loginModel) {
    console.log("login_method");
    return this.http.post<any>(this.baseUrl + '/api/Auth/login', model);
  }
  signup(model: signupModel) {
    return this.http.post<statusModel>(this.baseUrl + '/api/Auth/register', model);
  }
  changePassword(model: changePassword) {
    return this.http.post<statusModel>(this.baseUrl + '/changepassword', model);
  }
  addToken(accessToken: string) {
    localStorage.setItem('token', accessToken);
  }
  getAccessToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("payload");
    this.route.navigate(['/login']);
  }
  getUserRoles() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getAccessToken() ?? "");
    
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    const id=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
    localStorage.setItem("UserId",id);
    const fullName=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'];
    localStorage.setItem("Name",fullName);
    console.log(id+"id");
    return role;
  }

  getUserId(){

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getAccessToken() ?? "");
    
    const id=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
    localStorage.setItem("UserId",id);
    console.log(id+"id");
    return id;
  }

  getUserName(){

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getAccessToken() ?? "");
    
    const Name=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'];
    localStorage.setItem("Name",Name);
    console.log(Name+"id");
    return Name;
  }

}