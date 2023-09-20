import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RentalService } from 'src/app/shared/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit, OnDestroy {
  selectedData: any | null;
  private subscription: Subscription | undefined;

  constructor(
    public rentalService: RentalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const rentalId = +params['id'];
      
      this.selectedData = this.rentalService.getRentalById(rentalId);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
