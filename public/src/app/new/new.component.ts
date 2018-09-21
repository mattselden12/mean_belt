import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors:any[];
  newProduct: Object;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.errors=[];
    this.resetButton();
  }

  resetButton(){
    this.newProduct={
      prodid: Math.floor((Math.random() * 99999) + 1),
      prodname: "",
      prodquantity: "",
      prodprice: ""
    };
  }
  createButton(){
    this.newProduct['prodprice'] = Math.round(this.newProduct['prodprice'] * 100) / 100;
    console.log(this.newProduct['prodprice']);
    let observable = this._httpService.makeNewProduct(this.newProduct);
    observable.subscribe(data => {
      if (data['status'] === "bad") {
        this.errors = [];
        for (let key in data['content']['errors']) {
          if (key != "message" && key != "name" && key != "_message") {
            this.errors.push(data['content']['errors'][key]['message']);
          }
        }
      }
      else {
        console.log(data['content']);
        this._router.navigate(['/products']);
      }
    })
  }
}
