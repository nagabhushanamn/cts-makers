import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot } from '@angular/router'

@Injectable()
export class ProductResolverService {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.productService.loadProduct(route.params['prodId']);
  }

}
