import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCardComponent } from './travel-card/travel-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TravelCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [TravelCardComponent],
})
export class CardModule {}
