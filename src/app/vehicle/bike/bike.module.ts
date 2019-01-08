import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeformComponent } from './bikeform/bikeform.component';
import { BiketableComponent } from './biketable/biketable.component';  
import { FormsModule } from '@angular/forms';
  
@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [BikeformComponent, BiketableComponent],
  exports:[BikeformComponent, BiketableComponent]
})
export class BikeModule { }
