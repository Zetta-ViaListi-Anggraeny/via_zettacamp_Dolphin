import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public rentalService:RentalService) { }

  ngOnInit(): void {
  }

}
