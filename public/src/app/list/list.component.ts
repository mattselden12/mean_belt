import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allProducts: any[];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.allProducts=[];
    this.fetchAllProducts();
  }

  fetchAllProducts(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      if (data['status'] === "good") {
        this.allProducts = data['content'];
      }
      else {

      }
    })
  }

}
