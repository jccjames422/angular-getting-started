import { Component } from '@angular/core';
import { Product } from "../product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Phone XL', description: 'A large phone with one of the best screens' },
    { id: 2, name: 'Phone Mini', description: 'A great phone with one of the best cameras' },
    { id: 3, name: 'Phone Standard', description: '' }
  ];
}
