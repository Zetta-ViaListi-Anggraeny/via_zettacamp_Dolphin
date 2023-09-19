import { Component } from '@angular/core';
import { RentalService } from '../../shared/rental.service';

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.css'],
})
export class AdminInputComponent {
  rentalData: any = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    type: '',
    isAvailable: true,
    imageUrl: '../../assets/1.jpg',
  };

  constructor(public rentalService: RentalService) {}

  submitForm() {
    const validInfo: boolean = this.rentalData.stock > 0;

    console.log(validInfo);
    

    this.rentalService.addRentalData(this.rentalData);
    this.rentalData = {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      type: '',
      isAvailable: validInfo,
      imageUrl: '../../assets/1.jpg',
    }; // Clear the form fields after submission
    this.rentalService.showForm = false
  }
}
