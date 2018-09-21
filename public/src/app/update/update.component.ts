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
  origprodname;
  origprodquantity;
  origprodprice;

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
              this.origprodname = product.prodname;
              this.origprodquantity = product.prodquantity;
              this.origprodprice = product.prodprice;
              // {
              //   _id: product._id,
              //   prodid: product.prodid,
              //   prodname: product.prodname,
              //   prodquantity: product.prodquantity,
              //   prodprice: product.prodprice,
              //   createdAt: product.createdAt,
              //   updatedAt: product.updatedAt,
              //   __v: product.__v
              // };
              this.myprod = product;
            }
          }
        }
        else {
        }
      })
    })
  }

  resetButton(){
    console.log("reset");
    this.myprod['prodname']= this.origprodname;
    this.myprod['prodquantity']= this.origprodquantity;
    this.myprod['prodprice']= this.origprodprice;
  }

  updateButton(){
    this.myprod['prodprice'] = Math.round(this.myprod['prodprice'] * 100) / 100;
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
