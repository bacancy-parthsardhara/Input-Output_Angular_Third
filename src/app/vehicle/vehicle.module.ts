import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeModule } from './bike/bike.module';
import { CarModule } from './car/car.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[BikeModule,CarModule]
})
export class VehicleModule { }
