import { Component, OnInit } from '@angular/core';

import Review from '../models/review.model'

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewModel: Review;

  constructor() { }

  ngOnInit() {
    this.reviewModel = new Review('', '', '');
  }

  doCaseConversion(value: string) {
    this.reviewModel.name = value.toUpperCase();
  }

  submitReview(form) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }

}
