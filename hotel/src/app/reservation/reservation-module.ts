import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReservationFormComponent } from './reservation-form.component/reservation-form.component';
import { ReservationListComponent } from './reservation-list.component/reservation-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservationFormComponent,
    
    ReservationListComponent
  ],
  imports: [
    CommonModule, //  <-- REQUIRED for date pipe, ngIf, ngFor, etc.
    ReactiveFormsModule
  ],
  exports: [
  ],

   providers: [DatePipe]

})
export class ReservationModule { }
