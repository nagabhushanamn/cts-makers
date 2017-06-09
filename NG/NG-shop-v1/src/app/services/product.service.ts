
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export default class ProductService {

    apiURL: string = "http://localhost:3000/api/products";

    constructor(private _http: Http) { }

    getAllProducts() {
        return this._http.get(this.apiURL);
    }
}