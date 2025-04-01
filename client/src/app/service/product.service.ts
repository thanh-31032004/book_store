import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:5000/books';
  http = inject(HttpClient);
  constructor() { }

  // Get all products
  getAllProduct() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getProductDetail(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  // createProduct
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  // updateProduct
  editProduct(product: Product, id: string): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

}