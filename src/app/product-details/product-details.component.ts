import { Component, OnInit } from '@angular/core';
import { Product, products } from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  products: Product[];

  constructor(private route: ActivatedRoute) {
    this.products = products;
  }

  ngOnInit() {
    // First get the product id from the route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in the route.
    this.product = this.products.find(product => product.id === productIdFromRoute);
  }
}
