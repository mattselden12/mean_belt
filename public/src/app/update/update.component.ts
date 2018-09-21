import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  allProducts: any[];
  paramid: Number;
  myprod: any;
  origprod: any;
  errors: any[];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.myprod = {
      prodname: "",
      prodquantity: "",
      prodprice: ""
    };
    this.errors=[];
    this.fetchProduct()
  }

  fetchProduct() {
    this._route.params.subscribe((params: Params) => {
      this.paramid = params['id'];
      let obs = this._httpService.getAllProducts();
      obs.subscribe(data => {
        if (data['status'] === "good") {
          this.allProducts = data['content'];
          for (let product of this.allProducts) {
            if (product.prodid == this.paramid) {
              this.myprod = product;
              this.origprod = {
                _id: product._id,
                prodid: product.prodid,
                prodname: product.prodname,
                prodquantity: product.prodquantity,
                prodprice: product.prodprice,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
                __v: product.__v
              };
            }
          }
        }
        else {
        }
      })
    })
  }

  resetButton(){
    let tempobj = this.origprod;
    this.myprod = tempobj;
  }

  updateButton(){
    console.log("clicked UPDATE button");
    let obs = this._httpService.editThisProduct(this.myprod, this.myprod._id);
    obs.subscribe(data => {
      if (data['status'] === "bad") {
        this.errors = [];
        for (let key in data['content']['errors']) {
          if (key != "message" && key != "name" && key != "_message") {
            this.errors.push(data['content']['errors'][key]['message']);
          }
        }
      } else {
        console.log(data['content']);
        this._router.navigate(['/products']);
      }
    })
  }

}
