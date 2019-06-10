import { Component, OnInit, Input } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-biketable',
  templateUrl: './biketable.component.html',
  styleUrls: ['./biketable.component.css']
})
export class BiketableComponent implements OnInit {

    
    @Input('abc') bikeArray :Array<Ibike> ;

  constructor() { }

  ngOnInit() {
  }

}
