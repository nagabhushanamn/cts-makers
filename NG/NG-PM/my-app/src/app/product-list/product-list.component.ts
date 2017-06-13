import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allProducts = data.products;
    });
  }



}
