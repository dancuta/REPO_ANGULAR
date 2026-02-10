import { BookingService } from '../services/booking-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class NewBookingComponent implements OnInit {
  reservationForm: FormGroup;
  reservationId!: number; // used for edit existing reservation
  title: string = 'Create new appointment';

 constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    this.reservationForm = this.fb.group({
      id: [0],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(2)]],
      roomNumber: [null, [Validators.required, Validators.min(1)]],
    });

    this.reservationId = this.activatedRoute.snapshot.params['id'];
    let existingReservation;

    if (this.reservationId) { // EDIT mode
      console.log("Editing reservation with id " + this.reservationId);
      this.title = 'Edit appointment #' + this.reservationId;
      this.bookingService.getBookingById(this.reservationId).subscribe(data => {
        existingReservation = data;
        if (existingReservation) {
          this.reservationForm.patchValue(existingReservation);
        } else {
          alert("Reservation with id " + this.reservationId + " not found.");
          this.router.navigate(['/list']);
        }
      });

    }

  }


  ngOnInit(): void {

  }

  submitReservation() {
    this.bookingService.addBooking(this.reservationForm.value).subscribe(response => {
      console.log('Booking added:', response);
      if (response.status !== 201) {
        alert('Failed to create booking. Status code: ' + response.status);
      }

       this.router.navigate(['list']);
    }); 
  }

   isValid():boolean{
    return this.reservationForm.valid;
  }

}
