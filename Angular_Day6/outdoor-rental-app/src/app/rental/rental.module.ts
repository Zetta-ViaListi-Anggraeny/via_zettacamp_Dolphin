import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';



@NgModule({
  declarations: [
    RentalItemComponent,
    RentalListComponent,
    RentalDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RentalItemComponent,
    RentalListComponent,
    RentalDetailComponent
  ]
})
export class RentalModule { }
