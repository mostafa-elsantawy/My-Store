import { CartService } from './../services/cart.service';
import { ProductService } from './../services/product.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  qty: any = 0;

  ngSelect = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach((p) => {
        p.amount = 1;
      });
    });
  }

  addToCart(product: Product) {
    this.messageService.add({
      key: 'myKey1',
      closable: true,
      life: 1000,
      severity: 'success',
      summary: 'Cart',
      detail: 'Your product has been added to the cart!',
    });

    this.cartService.addToCart(product);
  }

  getProductAmount(event: any, currentProduct: Product) {
    const amount = event.target.value;
    currentProduct.amount = amount;
    console.log(currentProduct);
  }
}
