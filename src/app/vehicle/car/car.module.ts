import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarformComponent } from './carform/carform.component';
import { CartableComponent } from './cartable/cartable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule 
  ],
  declarations: [CarformComponent, CartableComponent],
  exports:[CarformComponent, CartableComponent]
})
export class CarModule { }
