import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/authservice.service';
import { SignupserviceService } from '../Services/signupservice.service';
import { loginModel } from '../Models/loginmodel';
import { Router } from '@angular/router';


@Component({
  selector: 'cws-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
 loginUser: loginModel = {
  email: '',
  password: ''
};
constructor(
  private signUpService: SignupserviceService,
  private fb: FormBuilder,
  private route: Router
) { }

role: string = '';

onPost() {
  if (this.loginUser.email && this.loginUser.password) {
    console.log(this.loginUser.email);
    this.signUpService.login(this.loginUser).subscribe({
      next: (resp: any) => {
        this.signUpService.addToken(resp['token']);
        localStorage.setItem('payload', JSON.stringify(resp['payload']));

        this.role = this.signUpService.getUserRoles() as string;

        if (this.role === 'Admin') {
          this.route.navigate(['/admin-page']);
        } else if (this.role === 'Washer') {
          this.route.navigate(['/washer']);
        } else {
          this.route.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }
}

ngOnInit() {
  if (this.signUpService.isLoggedIn()) {
    this.role = this.signUpService.getUserRoles() as string;

    if (this.role === 'Admin') {
      this.route.navigate(['/admin-page']);
    } else if (this.role === 'Washer') {
      this.route.navigate(['/washer']);
    } else {
      this.route.navigate(['/home']);
    }
  }
}
}



