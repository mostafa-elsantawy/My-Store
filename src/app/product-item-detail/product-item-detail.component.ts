import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productsList: Product[] = [];
  product?: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id')!;

    console.log(id);

    this.productService.getProducts().subscribe((products) => {
      this.product = products.filter((p) => {
        return p.id === id;
      })[0];
    });

    console.log(this.product);
  }

  getProductAmount(event: any) {
    this.product!.amount = event.target.value;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.messageService.add({
      key: 'myKey1',
      closable: true,
      life: 1000,
      severity: 'success',
      summary: 'Cart',
      detail: 'Your product has been added to the cart!',
    });
  }
}
