import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/shared/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  rentalData: any[] = [];

  constructor(public rentalService: RentalService) {}

  ngOnInit(): void {
    this.rentalService.rentalData$.subscribe((data) => {
      this.rentalData = data;
    });
  }

  // deleteItem(index: number) {
  //   if (confirm('Are you sure you want to delete this item?')) {
  //     this.rentalService.deleteRentalData(index);
  //   }
  // }

  seeDetail(index: number): void {
    const selectedRental = this.rentalData[index];
    this.rentalService.detailRentalData(selectedRental);
  }
}
