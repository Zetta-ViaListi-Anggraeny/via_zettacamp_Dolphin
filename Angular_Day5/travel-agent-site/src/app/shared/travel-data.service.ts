// shared/travel-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelDataService {
  data = {
    imageUrl: '../../assets/1.jpg',
    name: 'Visiting Komodo Island and Overnighting on a Pleasurable Boat',
    location: 'Labuan Bajo',
    description: 'allalalalallalalal'
  }
  private travelDataSubject = new BehaviorSubject<any[]>([this.data]);
  travelData$ = this.travelDataSubject.asObservable();

  showForm: boolean = false;

  constructor() {}

  addTravelData(data: any) {
    const currentData = this.travelDataSubject.value;
    currentData.push(data);
    this.travelDataSubject.next(currentData);
    console.log(currentData);
  }

  deleteTravelData(id: number){
    const currentData = this.travelDataSubject.value;
    if (id >= 0 && id < currentData.length) {
      currentData.splice(id, 1);
      this.travelDataSubject.next(currentData);
    }
  }

  toggleFormVisibility() {
    this.showForm = !this.showForm; // Toggle form visibility when called
  }
}
