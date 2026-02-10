import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingComponent } from './booking/booking.component';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewBookingComponent,
    ListBookingsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // ✅ REQUIRED for *ngFor
    ReactiveFormsModule // ✅ REQUIRED for formGroup
  ]
})
export class BookingModule { }
