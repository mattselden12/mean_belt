import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  fetchProduct(){
    
  }

  deleteButton(){
    console.log("clicked DELETE button");
  }
}
