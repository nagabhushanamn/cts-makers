import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  apiUrl: string = "http://0.0.0.0:8080/api/products";

  constructor(private _http: Http) { }
  loadProducts() {
    // let stream: Observable<Response> = this._http.get(this.apiUrl)
    // let jsonStream = stream.map(resp => resp.json());
    // return jsonStream;
    return this._http.get(this.apiUrl).map(resp => resp.json());

  }

  loadProduct(id) {
    return this._http.get(this.apiUrl + "/" + id).map(resp => resp.json());
  }

  saveProduct(product) {
    return this._http.post(this.apiUrl, product).map(resp => resp.json());
  }

}
