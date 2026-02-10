import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: false,
})
export class ProductListComponent {

  products: ProductModel[] = [
    new ProductModel(1, "Deluxe Room", 150),
    new ProductModel(2, "Suite", 300),
    new ProductModel(3, "Family Room", 200)
  ];


}
