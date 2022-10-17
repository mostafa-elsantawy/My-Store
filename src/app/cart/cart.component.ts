import { Product } from './../product.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Output() hideProduct: EventEmitter<Product> = new EventEmitter();

  products: Product[] = [];
  product!: Product;
  items = this.cartService.getItems();
  form: any;
  name1: any = '';

  constructor(
    private cartService: CartService,
    private route: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  loadData() {
    this.form.patchValue({
      userName: '',
      totalAmount: Number,
    });
  }

  onSubmit(form: any): void {
    console.log(form.value);

    console.log(this.calcTotal().toString());

    localStorage.setItem('username', form.value.name);
    localStorage.setItem('totalAmount', this.calcTotal().toString());

    this.route.navigate(['/confirmation']);
  }

  public calcTotal(): number {
    let total: number = 0;
    for (let item of this.items) {
      total += item.amount * item.price;
    }
    return total;
  }

  handleNameChange(nameInput: any) {
    console.log(nameInput);
  }

  deleteItem(product: Product) {
    this.cartService.deleteProduct(product);
    this.messageService.add({
      key: 'myKey2',
      closable: true,
      life: 1000,
      severity: 'error',
      summary: 'Cart',
      detail: 'Your product has been deleted from the cart!',
    });
  }

  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
