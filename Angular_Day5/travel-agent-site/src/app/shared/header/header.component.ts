import { Component, OnInit } from '@angular/core';
import { TravelDataService } from '../../shared/travel-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public travelService: TravelDataService) {}

  ngOnInit(): void {
  }

}
