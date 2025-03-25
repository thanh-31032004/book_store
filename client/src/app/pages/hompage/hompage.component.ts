import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import Product from '../../types/product';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ClientComponent } from "../../layout/client/client.component";

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
  imports: [ClientComponent],
  // imports: [NgIf, NgFor]
})
export class HompageComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Không thể tải danh sách sản phẩm';
        this.isLoading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  viewProductDetail(productId: string): void {
    // Implement navigation to product detail page
    console.log('View product detail:', productId);
  }
}