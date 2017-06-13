import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  productForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: 0,
      description: ''
    });
  }

  handleSubmit() {
    let newProduct = Object.assign({}, this.productForm.value, { makeDate: Date.now() });
    this.productService.saveProduct(newProduct)
      .subscribe(product => {
        this.productForm.reset();
        this.router.navigate(['products']);
      })
  }

}
