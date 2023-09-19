import { Component, OnDestroy, OnInit } from '@angular/core';
import { RentalService } from 'src/app/shared/rental.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit, OnDestroy {
  selectedData: any | null;
  private subscription: Subscription | undefined;

  constructor(public rentalService: RentalService) {}

  ngOnInit(): void {
    this.subscription = this.rentalService.selectedData$.subscribe((data) => {
      this.selectedData = data;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
