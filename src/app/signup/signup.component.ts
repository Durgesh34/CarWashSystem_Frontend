import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signupModel } from '../Models/signupModel';
import {  SignupserviceService } from '../Services/signupservice.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { validPattern } from './helper/pattern-match.validator';
import { statusModel } from '../Models/statusModel';

@Component({
  selector: 'cws-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private signupservice: SignupserviceService,private fb:FormBuilder){ }
  frm!:FormGroup;
  status!:statusModel;

  get f(){
    return this.frm.controls;
  }
  onPost(){
    this.status = {statuscode:0,message:"wait.."};
    console.log(this.frm.value);
    this.signupservice.signup(this.frm.value).subscribe({
     next: (res)=>{
       console.log(res);
      //  this.status=res;
      //  this.frm.reset();
     },
     error: (err)=>{
      this.status.statuscode=0;
      this.status.message= "some error on server side";
     console.log(err);
     },
     complete:()=>{
      
     }
    })
  }
  ngOnInit(): void {
    const passwordPatternRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
    const emailPatternRegex = new RegExp('^.+@gmail.com$'); // Checks if email ends with "@gmail.com"

    this.frm = this.fb.group({
        'fullName': ['', Validators.required],
        'email': ['', [Validators.required, validPattern( emailPatternRegex)]],
        'password': ['', [Validators.required, validPattern(passwordPatternRegex)]],
        'address': ['', Validators.required],
        'role': ['', Validators.required]
    });
}

 
}
