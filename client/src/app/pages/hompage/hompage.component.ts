import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import Product from '../../types/product';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ClientComponent } from "../../layout/client/client.component";
import { ListComponent } from "../product/list/list.component";

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css'],
  imports: [ListComponent],
})
export class HompageComponent {
}