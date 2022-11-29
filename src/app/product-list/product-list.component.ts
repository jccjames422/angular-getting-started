import { Component } from '@angular/core';
import { Product, products } from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];
  constructor() {
    this.products = products;
  }
}
