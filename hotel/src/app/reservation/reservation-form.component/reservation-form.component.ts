import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FakeReservationService } from '../fake-reservation-service';
import { HttpReservationService } from '../reservation-http-service';
import { ReservationModel } from '../../models/reservation-model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'hotel-reservation-form.component',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})

export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup;
  reservationId!: number;

  constructor(
    private fb: FormBuilder,
    private reservationService: HttpReservationService,
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

    if (this.reservationId) {

      this.reservationService.getReservationById(this.reservationId).subscribe(data => {
        existingReservation = data;
        if (existingReservation) {
          this.reservationService.displayReservation(existingReservation);
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

    console.log("Reservation Added:");
    if (!this.reservationForm.valid) {
      alert("Form is not valid. Please check the fields.");
      return;
    }

    let newReservation: ReservationModel = this.reservationForm.value as ReservationModel;

    this.reservationService.addReservation(newReservation).subscribe(data => {
      console.log("Reservation created with id: "+ data.id)
      console.log(data)
      
    });


    // let id = this.reservationService.create(r);
    // console.log("Reservation created with id: " + id);
    // this.reservationService.displayReservation(r);


    return;
  }

  isValid(): boolean {
    return this.reservationForm.valid;
  }




}
