import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  allProducts: any[];
  paramid: Number;
  myprod: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.myprod={};
    this.fetchProduct()
  }

  fetchProduct(){
    this._route.params.subscribe((params: Params) => {
      this.paramid = params['id'];
      let obs = this._httpService.getAllProducts();
      obs.subscribe(data => {
        if (data['status'] === "good") {
          this.allProducts = data['content'];
          for(let product of this.allProducts){
            if(product.prodid == this.paramid){
              this.myprod = product;
            }
          }
        }
        else {
        }
      })
    })
  }

  deleteButton(){
    if (this.myprod.prodquantity != 0){
      console.log("Why is it hitting me?");
    }
    else{
      console.log("clicked DELETE button");
      let obs = this._httpService.deleteThisProduct(this.myprod._id);
      obs.subscribe(data => console.log(data['content']));
      this._router.navigate(['/products']);
    }
  }
}
