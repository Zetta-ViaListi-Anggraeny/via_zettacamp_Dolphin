import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/shared/rental.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  rentalData:any[] = []

  constructor(public rentalService: RentalService, ) {}

  ngOnInit(): void {
    this.rentalService.rentalData$.subscribe((data) => {
      this.rentalData = data;
    });
  }

  onDeleteData(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.rentalService.deleteRentalData(id);
    }
  }

}
