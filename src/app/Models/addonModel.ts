export interface addon{
    id:string,
    name:string,
    description:string,
    price:number,
    washPackageId:string
}

export interface order{


    id?:number, 
    name: string,
    scheduledatetime:Date,
    pickUpPoint: string,
    totalAmount: number,
    carModel:string,
    carNumber:string,
    userId:string
}