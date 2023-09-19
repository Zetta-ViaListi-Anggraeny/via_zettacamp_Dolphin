import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    TravelFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule
  ], 
  exports: [
    TravelFormComponent
  ]
})
export class FormModule { }
