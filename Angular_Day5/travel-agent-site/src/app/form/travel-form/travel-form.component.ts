// form/travel-form.component.ts
import { Component } from '@angular/core';
import { TravelDataService } from '../../shared/travel-data.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css'],
})
export class TravelFormComponent {
  travelData: any = {};

  constructor(public travelService: TravelDataService) {}

  submitForm() {
    this.travelService.addTravelData(this.travelData);
    this.travelData = {}; // Clear the form fields after submission
    this.travelService.showForm = false
  }
}
