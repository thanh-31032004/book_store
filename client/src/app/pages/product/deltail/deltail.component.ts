import { Component, inject } from '@angular/core';
import Product from '../../../types/product';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-deltail',
  imports: [NgIf, NgFor, CommonModule, FormsModule, RouterLink],
  templateUrl: './deltail.component.html',
  styleUrl: './deltail.component.css'

})
export class DeltailComponent {
  product!: Product | undefined;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  quantity: number = 1;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProductDetail(params['id']).subscribe({
        next: (product) => {
          if (product) {
            this.product = product;
          } else {
            this.router.navigate(['/not-found']); // Navigate to "not found" page if product is undefined
          }
        },
        error: (error) => {

          console.error(error);
        },
      });
    }
    );
  }
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Hàm tăng số lượng
  increaseQuantity(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  // Hàm thêm vào giỏ hàng
  addToCart(): void {
    if (this.product && this.quantity > 0) {
      // TODO: Implement cart service
      console.log('Thêm vào giỏ hàng:', {
        product: this.product,
        quantity: this.quantity
      });
      // Hiển thị thông báo thành công
      alert('Đã thêm sản phẩm vào giỏ hàng!');
    }
  }

  // Hàm xử lý khi người dùng nhập trực tiếp số lượng
  onQuantityChange(): void {
    if (this.product) {
      if (this.quantity < 1) {
        this.quantity = 1;
      } else if (this.quantity > this.product.stock) {
        this.quantity = this.product.stock;
      }
    }
  }
}
