import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInputComponent } from './admin-input/admin-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminInputComponent
  ]
})
export class AdminModule { }
