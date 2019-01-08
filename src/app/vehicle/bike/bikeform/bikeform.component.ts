import { Component, OnInit } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-bikeform',
  templateUrl: './bikeform.component.html',
  styleUrls: ['./bikeform.component.css']
})
export class BikeformComponent implements OnInit {

  bikeBrand: string;
  bikeModel: string;
  bikeNumber: number;
  bikeArray: Array<Ibike> = []; 

  bikeform(): Ibike {
    let bikeObj: Ibike = {
      bikeBrand: this.bikeBrand,
      bikeModel: this.bikeModel,
      bikeNumber: this.bikeNumber
    }
    this.bikeArray.push(bikeObj);
    console.log(this.bikeArray);
    return bikeObj;
  }

  constructor() { }

  ngOnInit() {
  }

}
