import { Component } from '@angular/core';
import { addon } from '../Models/addonModel';
import { AddonService } from '../Services/addon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent {
  addons:addon[]=[];  
  constructor(private addonservice:AddonService,private router:Router){}

  ngOnInit(){
    this.addonservice.getAllWashPackage()
    .subscribe({
      next:(addons) =>{
       this.addons=addons;
       console.log(addons);
      },
      error:(response) =>{
        console.log(response);
      }
    })
}
addAddon:addon={
  id: '',
  name: '',
  description: '',
  price: 0,
  washPackageId: ''
};


// as the service method need object so we pass the object by calling method
// the input received from website is stored in addWashPackage
addAddons(){
  this.addonservice.Addaddon(this.addAddon)
  .subscribe({
    next:(response)=>{
      console.log(response);
    }
  })
}

deleteaddon(id:string){
  this.addonservice.deleteAddon(id)
  .subscribe({
    next:(response)=>{
      this.router.navigate(['/addon-package']);
    }

  });
}

}
