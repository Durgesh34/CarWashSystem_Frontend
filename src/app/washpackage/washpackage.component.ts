import { Component } from '@angular/core';
import { washPackage } from '../Models/washPackage';
import { WashPackageService } from '../Services/wash-package.service';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'cws-washpackage',
  templateUrl: './washpackage.component.html',
  styleUrls: ['./washpackage.component.css']
})
export class WashpackageComponent {
  packages:washPackage[]=[];  
  
  
  
  constructor(private packageservice:WashPackageService,private router:Router,private cart:CartService ){}
  
  ngOnInit(){
    this.packageservice.getAllWashPackage()
    .subscribe({
      next:(packages) =>{
        this.packages=packages;
        console.log(packages);
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }
  addWashPackage:washPackage={
    id:'',
    name:'',
    description:'',
    price:0
  };
  

  // as the service method need object so we pass the object by calling method
  // the input received from website is stored in addWashPackage
  addPackage(){
    this.packageservice.addWashPackage(this.addWashPackage)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }

  deletepackage(id:string){
    this.packageservice.deleteWashPackage(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['/wash-package']);
      }

    });
  }

  
  
}

