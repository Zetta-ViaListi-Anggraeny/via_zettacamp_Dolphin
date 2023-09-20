import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RentalModule } from './rental/rental.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'rental',
    loadChildren: () =>
      import('./rental/rental.module').then((m) => m.RentalModule),
  },
  { path: '', redirectTo: 'rental', pathMatch: 'full' }, // Redirect to /rental by default
  //path *** untuk ke random
  { path: '**', redirectTo: 'rental', pathMatch: 'full' }, // Redirect to /rental by default

];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RentalModule,
    AdminModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
