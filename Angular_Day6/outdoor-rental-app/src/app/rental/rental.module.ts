import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { Routes, RouterModule } from '@angular/router';

const rentalRoutes: Routes = [
  { path: '', component: RentalListComponent },
  { path: 'item-detail/:id', component: RentalDetailComponent },
];

@NgModule({
  declarations: [
    RentalItemComponent,
    RentalListComponent,
    RentalDetailComponent,
  ],
  imports: [CommonModule,RouterModule.forChild(rentalRoutes)],
  exports: [RentalItemComponent, RentalListComponent, RentalDetailComponent],
})
export class RentalModule {}
