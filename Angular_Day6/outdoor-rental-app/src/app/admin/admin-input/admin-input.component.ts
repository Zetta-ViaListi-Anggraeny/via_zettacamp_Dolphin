import { Component } from '@angular/core';
import { RentalService } from '../../shared/rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.css'],
})
export class AdminInputComponent {
  rentalData = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    type: '',
    isAvailable: true,
    imageUrl: '../../assets/1.jpg',
  };

  constructor(public rentalService: RentalService, private router: Router) {}

  submitForm() {
    const validInfo: boolean = this.rentalData.stock > 0;
    const id = Date.now();

    this.rentalData = {
      id: id,
      name: this.rentalData.name,
      description: this.rentalData.description,
      price: this.rentalData.price,
      stock: this.rentalData.stock,
      type: this.rentalData.type,
      isAvailable: validInfo,
      imageUrl: this.rentalData.imageUrl,
    };

    this.rentalService.addRentalData(this.rentalData);
    this.rentalData = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      type: '',
      isAvailable: validInfo,
      imageUrl: '../../assets/1.jpg',
    }; // Clear the form fields after submission
    // this.rentalService.showForm = false
    // this.router.navigate(['']);
  }
}
