import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  rentalData = [
    {
      id: 1,
      name: 'Camping Tent',
      description: 'Enjoy the great outdoors with our spacious camping tents.',
      price: 40000,
      stock: 20,
      type: 'Tent for 4 People',
      isAvailable: true,
      imageUrl: '../../assets/1.jpg',
    },
    {
      id: 2,
      name: 'Tracking Pole',
      description: 'Perfect for tracking through various terrains, our pool shoes keep your feet dry and comfortable.',
      price: 10000,
      stock: 0,
      type: 'For Outdoor Adventures',
      isAvailable: false,
      imageUrl: '../../assets/2.jpg',
    },
    {
      id: 3,
      name: 'Hiking Shoes',
      description: 'Perfect for tracking through various terrains, our pool shoes keep your feet dry and comfortable.',
      price: 20000,
      stock: 20,
      type: 'Footwear for Outdoor Adventures',
      isAvailable: true,
      imageUrl: '../../assets/3.jpg',
    },
    {
      id: 4,
      name: 'Mountain Chalet',
      description: 'Escape to the mountains in our cozy chalet.',
      price: 60000,
      stock: 8,
      type: 'Chalet for 4 People',
      isAvailable: true,
      imageUrl: '../../assets/4.jpeg',
    },
  ];

  rentalDataSubject = new BehaviorSubject<any[]>(this.rentalData);
  rentalData$ = this.rentalDataSubject.asObservable();

  selectedRentalData = new BehaviorSubject<any[] | null>(null);
  selectedData$ = this.selectedRentalData.asObservable();


  constructor() {}

  addRentalData(data: any) {
    const currentData = this.rentalDataSubject.value;
    currentData.push(data);
    this.rentalDataSubject.next(currentData);
    console.log(currentData);
  }

  deleteRentalData(id: number) {
    const currentData = this.rentalDataSubject.value;
    if (id >= 0 && id < currentData.length) {
      currentData.splice(id, 1);
      this.rentalDataSubject.next(currentData);
    }
  }

  detailRentalData(item: any) {
    this.selectedRentalData.next(item);
  }

  resetSelectedData() {
    this.selectedRentalData.next(null);
  }

  getRentalById(id: number): any | null {
    const rentals = this.rentalData;
    const rental = rentals.find((item) => item.id === id);
    return rental || null;
  }
}
