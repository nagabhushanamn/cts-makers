import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';

import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


function myCustomRangeValidator(min: number, max: number) {
  return function (c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value > min && c.value <= max) {
      return null;
    } else {
      return { "range": true }
    }
  }
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {


  customerModel: Customer; // Data Model

  customerFormGroup: FormGroup;

  firstNameErrorMessage:string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerModel = new Customer('');

    // this.customerFormGroup = new FormGroup({
    //   firstName: new FormControl(''),
    //   email: new FormControl(''),
    // });

    // this.customerFormGroup = this.fb.group({
    //   firstName: '',
    //   //email:{value:'n/a',disabled:true}
    //   email: [{value:'nag@gmail.com',disabled:true}]
    // });

    this.customerFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      phone: '',
      notification: 'email',
      range: ['1', [Validators.required, myCustomRangeValidator(1, 5)]]
    });


    let firstNameControl = this.customerFormGroup.get('firstName');
    
    firstNameControl.valueChanges.subscribe(event => {
      this.customerFormGroup.patchValue({
        //firstName:event.toUpperCase()
      });
    });

    firstNameControl.statusChanges.subscribe(status=>{
      if(status==="INVALID"){
        this.firstNameErrorMessage="Something Bad"
      }else{
        this.firstNameErrorMessage='';
      }
    })

    //..



  }

  changeNotification(mode) {
    let phoneFormControl = this.customerFormGroup.get('phone');
    if (mode === "text") {
      phoneFormControl.setValidators(Validators.required);
    } else {
      phoneFormControl.clearValidators();
    }
    phoneFormControl.updateValueAndValidity();
  }

  loadCustomer() {
    // api call
    let dataModel = {
      firstName: 'Nagabhushanam',
      //email: 'Nag@gmail.com'
    };
    // this.customerFormGroup.setValue(dataModel);
    this.customerFormGroup.patchValue(dataModel);
  }

}
