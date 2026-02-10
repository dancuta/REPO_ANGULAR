import { Component } from '@angular/core';
import { BookingModel } from 'src/app/models/booking-model';
import { BookingService } from '../services/booking-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent {
  bookings: BookingModel[] = [];

  constructor(
    private bookingService: BookingService, 
    private router: Router) {
  }

  ngOnInit() {
    this.getAllBookings();

  }

  getAllBookings() {
    this.bookingService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });

  }

  getCountBookings(): number {
    return this.bookings.length;
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe
      (
        {
          next: (response) => {
            if (response.status === 204) {
              this.bookings = this.bookings.filter(b => b.id !== id);
            }
          },
          error: (err) => {
            console.error('Error deleting booking with id ' + id + ': ', err);
          }
        }
      );

  }

  updateBooking(booking: BookingModel) {
    console.log("Update booking " + booking.id);
    this.router.navigate(['edit/', booking.id]);

  }
}
