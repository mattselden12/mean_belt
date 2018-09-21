import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resetButton(){
    console.log("clicked RESET button");
  }

  updateButton(){
    console.log("clicked UPDATE button");
  }

}
