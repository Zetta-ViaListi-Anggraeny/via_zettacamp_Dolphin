import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  @Input() rentalDataItem : any;
  @Output() deleteData = new EventEmitter<any>();

  constructor() { }

  onDeleteData(){
    this.deleteData.emit(this.rentalDataItem)    
  }

  ngOnInit(): void {
  }

}
