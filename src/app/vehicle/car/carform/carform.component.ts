import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Icar } from '../icar';
@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  
  @Output() carvar = new EventEmitter();

  carBrand: string;
  carModel: string;
  carNumber: number;
  carArray: Array<Icar> = []; 

  carclick(): Icar {
    let carObj: Icar = {
      carBrand: this.carBrand,
      carModel: this.carModel,
      carNumber: this.carNumber
    }
    this.carArray.push(carObj);
    this.carvar.emit(this.carArray);
    
    console.log("in carform");
    return carObj;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
