import { CartComponent } from './../cart/cart.component';
import { ConfirmationService } from './../services/confirmation.service';
import { ProductService } from './../services/product.service';
import { Product } from './../product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  productService: any;
  form: any;
  onSubmit: any;

  username: any = '';

  totalAmount: any = 0;

  constructor(
    productService: ProductService,
    confirmaion: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.totalAmount = localStorage.getItem('totalAmount');
  }

}
