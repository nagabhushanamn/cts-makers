
import { Component } from '@angular/core';

@Component({
    selector: 'shop-app',
    template: `
    <div class="container">
        <div class="page-header">{{name}}</div>
            <div class="list-group">
                <div *ngFor="let item of products | slice:0:10;let i=index" class="list-group-item">
                   <shop-product [index]="i" [product]="item"></shop-product>
                </div>
            </div>
    </div>
    `
})
class AppComponent {
    name: string = 'shopIT';

    products: any[] = [{
        name: 'Laptop',
        price: 198000,
        description: 'New mac Pro',
        canBuy: true,
        makeDate: Date.now(),
        //inStock: true,
        images: [
            { thumb: '', full: 'images/Laptop.png' },
            { thumb: '', full: '' }
        ],
        reviews: [
            { stars: 5, author: 'Nag@gmail.com', comment: 'good one' },
            { stars: 1, author: 'Indu@gmail.com', comment: 'too costly' }
        ]
    },
    {
        name: 'Mobile',
        price: 18000,
        description: 'New iphone',
        canBuy: true,
        makeDate: Date.now(),
        //inStock: true,
        images: [
            { thumb: '', full: 'images/Mobile.png' },
            { thumb: '', full: '' }
        ],
        reviews: [
            { stars: 5, author: 'Nag@gmail.com', comment: 'good one' },
            { stars: 1, author: 'Indu@gmail.com', comment: 'too costly' }
        ]
    }];


}

export default AppComponent;