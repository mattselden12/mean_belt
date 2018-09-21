import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  resetButton(){
    console.log("clicked RESET button");
  }

  updateButton(){
    console.log("clicked UPDATE button");
  }

}
