"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'shopIT';
        this.products = [{
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'shop-app',
        template: "\n    <div class=\"container\">\n        <div class=\"page-header\">{{name}}</div>\n            <div class=\"list-group\">\n                <div *ngFor=\"let item of products | slice:0:10;let i=index\" class=\"list-group-item\">\n                   <shop-product [index]=\"i\" [product]=\"item\"></shop-product>\n                </div>\n            </div>\n    </div>\n    "
    })
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map