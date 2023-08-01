

import { Component } from '@angular/core';
import { washPackage } from '../Models/washPackage';
import { WashPackageService } from '../Services/wash-package.service';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { TotalAmountService } from '../Services/TotalAmount.service';

@Component({
  selector: 'cws-washerpage',
  templateUrl: './washerpage.component.html',
  styleUrls: ['./washerpage.component.css']
})
export class WasherpageComponent {
  packages: washPackage[] = [];
  cart2: washPackage[] = [];
  totalPrice: number = 0;

  constructor(
    private packageservice: WashPackageService,
    private router: Router,
    private cartService: CartService,
    private totalAmountService: TotalAmountService // Inject the TotalAmountService
  ) {}

  ngOnInit() {
    this.packageservice.getAllWashPackage().subscribe({
      next: (packages) => {
        this.packages = packages;
        console.log(packages);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  addToCart(packages: washPackage) {
    if (!this.isPackageInCart(packages)) {
      this.cart2.push(packages);
      this.cartService.addToCart(packages);
      this.calculateTotalPrice();
    }
  }

  removeFromCart(packages: washPackage) {
    const index = this.cart2.indexOf(packages);
    if (index !== -1) {
      this.cart2.splice(index, 1);
      this.cartService.removeFromCart(packages);
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.cart2.reduce((total, packages) => total + packages.price, 0);
    this.totalAmountService.setTotalAmount(this.totalPrice); // Update the shared total amount
  }

  isPackageInCart(packages: washPackage): boolean {
    return this.cart2.some((cartPackage) => cartPackage.id === packages.id);
  }
}

