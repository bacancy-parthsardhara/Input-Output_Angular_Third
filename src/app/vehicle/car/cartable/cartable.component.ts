import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {

  public cardata;

  oncarclick(param){
    this.cardata=param;
  }

  constructor() { }

  ngOnInit() {
  }

}
