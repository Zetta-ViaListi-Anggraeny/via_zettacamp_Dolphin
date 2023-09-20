import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public rentalService: RentalService, private router: Router) {}

  ngOnInit(): void {}
  navigateToAdminInput() {
    this.router.navigate(['/admin']);
  }

  navigateToHome() {
    this.router.navigate(['/'])
  }
  
}
