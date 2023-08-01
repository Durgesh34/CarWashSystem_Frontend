import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WashPackageService } from '../Services/wash-package.service';
import { washPackage } from '../Models/washPackage';

@Component({
  selector: 'cws-editwashpackage',
  templateUrl: './editwashpackage.component.html',
  styleUrls: ['./editwashpackage.component.css']
})
export class EditwashpackageComponent {
  constructor(private route:ActivatedRoute,private washservice:WashPackageService,private routes:Router){}

packagedetais:washPackage={
  id:'',
  name:'',
  description:'',
  price:0
}

  ngOnInit(){
      this.route.paramMap.subscribe({
        next:(params)=>{
          //storing the url id in const variable
          const id=params.get('id');
          if(id){
            this.washservice.getWashPackageById(id)
            .subscribe({
              next:(response)=>{
                  this.packagedetais=response;
              }
            })
          }

        }
      })
  }

  updateWashPackage(){
    this.washservice.updateWashPackage(this.packagedetais.id,this.packagedetais)
    .subscribe({
      next:(response)=>{
        this.routes.navigate(['/wash-package'])
      }
    })
  }
}
