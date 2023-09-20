import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInputComponent } from './admin-input/admin-input.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const adminRoutes: Routes = [{ path: 'admin', component: AdminListComponent }];

@NgModule({
  declarations: [AdminInputComponent, AdminItemComponent, AdminListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [AdminInputComponent],
})
export class AdminModule {}
