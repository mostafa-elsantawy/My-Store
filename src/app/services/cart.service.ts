import { HttpClient } from '@angular/common/http';
import { Product } from './../product.model';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeErrorCtor } from 'rxjs/internal/util/ArgumentOutOfRangeError';
import { identity, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  amount = '';
  onSubmit: any;
  form: any;
  constructor(private http: HttpClient , private messageService:MessageService) {}

  addToCart(product: Product) {
    console.log(product);

    let index = this.items.indexOf(product);

    if (index != -1) {
      this.items[index].amount += product.amount;
    } else {
      this.items.push(product);
    }
    this.addToCart = function(product){
      var isDuplicate = false;
      for(var i=index;i<this.items.length;i++){
         if(product.id == this.items[i].id){
          isDuplicate =true;
           break;
          }
  
     }
     
     if(!isDuplicate ){
 
          this.items.push(product);
   
       }
      
  } 
  }

  

  getItems() {
    return this.items;
  }

  itemsCount() {
    return this.items.length;
  }

  deleteProduct(product: Product) {
    let index = this.items.indexOf(product);
    this.items.splice(index, 1);
  }
}
