import { Component, OnInit } from '@angular/core';
import { signupModel } from '../Models/signupModel';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  customers: signupModel[] = [];
  washers: signupModel[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getAllUser().subscribe({
      next: (users) => {
        this.customers = users.filter(user => user.role === 'Customer');
        this.washers = users.filter(user => user.role === 'Washer');
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  deleteuser(id?: number) {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.router.navigate(['/user-list']);
        this.userService.getAllUser();
      }
    });
  }

}
