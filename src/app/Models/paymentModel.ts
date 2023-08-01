export interface payment{


  id?:number, 
  cardHolderName?:string,
  cardType?: string,
  cardNumber?: string,
  cvv?: string,
  totalAmount?: number,
  expiryDate?: Date,
  userId?:string
}