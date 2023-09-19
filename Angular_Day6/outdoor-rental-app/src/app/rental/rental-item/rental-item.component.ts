import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.css'],
})
export class RentalItemComponent {
  @Input() rentalDataItem : any;
  @Output() seeDetail = new EventEmitter<any>();

  onSeeDetail(){
    this.seeDetail.emit(this.rentalDataItem)
  }
}
