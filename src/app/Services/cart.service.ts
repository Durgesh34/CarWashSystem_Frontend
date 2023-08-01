// cart.service.ts

import { Injectable } from '@angular/core';
import { washPackage } from '../Models/washPackage';  // Replace 'path-to-package-model' with the actual path to your package model

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: washPackage[] = [];

  addToCart(cart: washPackage) {
    this.cart.push(cart);
  }

  removeFromCart( cart: washPackage) {
    const index = this.cart.findIndex(item => item.id ===  cart.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCartItems(): washPackage[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cart.forEach( cart => {
      totalPrice +=  cart.price;
    });
    return totalPrice;
  }
}
