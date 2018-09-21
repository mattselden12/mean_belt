import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get('/api/products');
  }
  getThisProduct(productid) {
    return this._http.get(`/api/products/${productid}`);
  }
  makeNewProduct(productinfo) {
    return this._http.post('/api/products', productinfo);
  }
  editThisProduct(productinfo, productid) {
    return this._http.put(`/api/products/${productid}`, productinfo);
  }
  deleteThisProduct(productid) {
    return this._http.delete(`/api/products/${productid}`);
  }
}
