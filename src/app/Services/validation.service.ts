import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  /// Validations for order:

  validateCarModel(carModel: string): boolean {
    return carModel.length >= 2 && carModel.length <= 50;
  }

  validateCarNumber(carNumber: string): boolean {
    const pattern = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
    return pattern.test(carNumber);
  }

  validatePickupPoint(pickupPoint: string): boolean {
    return pickupPoint.length >= 10 && pickupPoint.length <= 200;
  }
}
