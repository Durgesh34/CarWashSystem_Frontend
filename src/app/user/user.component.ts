import { Component } from '@angular/core';
import { signupModel } from '../Models/signupModel';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users:signupModel[]=[];

  constructor(private userservice:UserService,private router:Router){}

  ngOnInit(){
    this.userservice.getAllUser()
    .subscribe({
      next:(users) =>{
       this.users=users;
       console.log(users);
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }

  deleteuser(id?:number){
    this.userservice.deleteUser(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['/user-list']);
      }

    });
  }

  userRole:string="";

}
