import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: string;

  product: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // console.dir(this.route);

    // way-1
    //this.id = this.route.snapshot.params['prodId'];

    //way-2
    // this.route.params.map(params => params['prodId'])
    //   .subscribe(id => {
    //     this.id = id;
    //   });

    this.route.data.subscribe(data => {
      this.product = data.product;
    })


  }

  goBack() {
    this.router.navigate(['products']);
  }

}
