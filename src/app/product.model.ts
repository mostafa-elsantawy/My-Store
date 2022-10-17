// export class Product {
//   static id: number;
//   constructor(
//     public id: number,
//     public name: string,
//     public price: number,
//     public url: string,
//     public description: string,
//     public amount: number
//     ) {}
// }

export interface Product {
    id: number,
    name: string,
    price: number,
    url: string,
    description: string,
    amount: number,
    user:string,
    total:number,
}
