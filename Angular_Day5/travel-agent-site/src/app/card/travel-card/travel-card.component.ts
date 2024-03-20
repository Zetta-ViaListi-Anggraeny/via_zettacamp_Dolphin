// card/travel-card.component.ts
import { Component, OnInit } from '@angular/core';
import { TravelDataService } from '../../shared/travel-data.service';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css'],
})
export class TravelCardComponent implements OnInit {
  travelData: any[] = [];

  constructor(public travelService: TravelDataService) {}

  ngOnInit() {
    this.travelService.travelData$.subscribe((data) => {
      this.travelData = data;
    });
  }

  deleteItem(index: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.travelService.deleteTravelData(index);
    }
  }
}
