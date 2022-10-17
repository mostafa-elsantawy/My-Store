import { Injectable } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

import { HttpClient } from '@angular/common/http';
import { map, Observable, of, throwError } from 'rxjs';

import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

}
