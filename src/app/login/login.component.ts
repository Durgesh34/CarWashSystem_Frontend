import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { statusModel } from '../Models/statusModel';
import { validPattern } from '../signup/helper/pattern-match.validator';
import { loginModel } from '../Models/loginmodel';
import { Router } from '@angular/router';
import { AlertService } from '../Services/alert.service';
@Component({
  selector: 'cws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser:loginModel={
    email:'',
    password:''
  };
  constructor(
    private signUpService:SignupserviceService,
    private fb:FormBuilder,
    private route:Router,
    private alertService: AlertService

    
    )
    { }

  
  role="";
  onPost(){
    if (this.loginUser.email && this.loginUser.password) {
      console.log(this.loginUser.email);
      this.signUpService.login(this.loginUser).subscribe({
        next: (res:any) => {
         

          this.signUpService.addToken(res.token);
          localStorage.setItem('payload',JSON.stringify(res['payload']));
          
        
          this.role=this.signUpService.getUserRoles();
          
          if(this.role=='Admin'){
              this.route.navigate(['/admin-page']);
          }
          else if(this.role=='Washer'){
            this.route.navigate(['/order']);
          }
          else{
             this.route.navigate(['/home']); 
          }

          this.alertService.show('Login successful!', '#4CAF50', 2500);

      },
      error:(err)=>{
        console.log(err.error);
        this.alertService.show('Login failed: ' + 'Enter Valid Details', 'red', 2500);
      }
    })
  }

}

ngOnInit(){
  if(this.signUpService.isLoggedIn()){
    this.route.navigate(['/home'])
  }
}


}