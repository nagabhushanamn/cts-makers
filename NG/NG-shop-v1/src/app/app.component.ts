
import { Component } from '@angular/core';
import ProductService from './services/product.service';

@Component({
    selector: 'shop-app',
    template: `
        <div class="container">
            <div class="page-header">{{appName}}</div>

            <div class="alert alert-danger" *ngIf="message">
                {{message}}
            </div>

            <div class="list-group">
                 <div *ngFor="let product of products|slice:0:10;let idx=index;let isFirst=first" class="list-group-item">
                       <shop-product [index]="idx" 
                                     [product]="product" 
                                    (onReviewSubmit)="handleAnyReviewSubmit($event)">
                      </shop-product> 
                </div>    
            </div>
           
        </div>
    `,
    providers: [ProductService]
})
class AppComponent {
    appName: string = "shoping-IT";
    products: any[] = [];
    message: string;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts()
            .subscribe((resp) => { this.products = resp.json() }, (err) => { this.message = " API-Server Not Ready yet" });
    }

    handleAnyReviewSubmit(event: any) {
        event.product.reviews.push(event.review);
    }

}

export default AppComponent;