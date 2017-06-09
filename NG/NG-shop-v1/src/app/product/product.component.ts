
import { Component, Input, Output, EventEmitter } from '@angular/core';
import Review from '../model/review.model'

@Component({
    selector: 'shop-product',
    templateUrl: './product.component.html',
})
export default class ProductComponent {

    @Input()
    product: any;

    @Input()
    index: number;

    @Output()
    onReviewSubmit = new EventEmitter();

    tab: number = 1;

    newReview: Review = new Review(0, '', '');

    changeTab(tabIndex: number, event: any) {
        event.preventDefault();
        this.tab = tabIndex;
    }
    isTabSelected(tabIndex: number) {
        return this.tab === tabIndex;
    }

    submitNewReview(event: any, product: any, reviewForm: any) {
       
        event.preventDefault();

        // product.review.push(this.newReview);
        // this.newReview = new Review(0, '', '');
        // reviewForm.reset();  // check this

        this.onReviewSubmit.emit({ product, review: this.newReview });
        this.newReview = new Review(0, '', '');

        // reviewForm.reset();  // check this

    }

}