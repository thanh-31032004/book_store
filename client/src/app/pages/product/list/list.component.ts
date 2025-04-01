import { Component, OnInit, inject } from '@angular/core';
import Product from '../../../types/product';
import { ProductService } from '../../../service/product.service';
import { NgFor, NgIf } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [NgFor, NgIf, SlickCarouselModule, RouterLink], // Thêm SlickCarouselModule
})
export class ListComponent implements OnInit {
  featuredProducts: Product[] = [];
  productService = inject(ProductService);

  // Cấu hình cho Slick Carousel
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tự động chuyển slide sau 3 giây
    dots: true,
    arrows: true,
    infinite: true,
    centerPadding: '20px',
  };

  ngOnInit(): void {
    this.loadTopRatedProducts();
  }

  loadTopRatedProducts(): void {
    this.productService.getAllProduct().subscribe(products => {
      this.featuredProducts = products
        .sort((a, b) => b.rating - a.rating) // Sắp xếp giảm dần theo rating
        .slice(0, 10); // Lấy 10 sản phẩm đầu tiên
    });
  }

}