import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../../models/reservation-model';
import { HttpReservationService } from '../reservation-http-service';
// import { FakeReservationService } from '../fake-reservation-service';
import { Router } from '@angular/router';

@Component({
  selector: 'hotel-reservation-list.component',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {

  reservations: ReservationModel[] = [];

  constructor(private reservationService: HttpReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getReservations();

  }

  getNumberOfBookings(): number {
    return this.reservations.length;
  }

  private getReservations() {
    console.log("Getting reservations...");

    this.reservationService.getReservations().subscribe(data => {
      this.reservations = data;
    });

  }

  deleteReservation(id: number) {
    console.log("Deleting ID: " + id);
    this.reservationService.deleteReservation(id).subscribe({
      next: (response) => {
        console.log('Http Status:', response.status);          // e.g. 200, 204
        console.log('Http Status text:', response.statusText); // e.g. "OK", "No Content"

        if (response.status === 200 || response.status === 204) {
          // success logic here
        }
      },
      error: (error) => {
        console.log('Delete Error Http status:', error.status);   // e.g. 404, 500
        console.log('Delete Error Http body:', error.error);
      }
    });

  }

  editReservation(id: number) {
    console.log("Edit ID: " + id);
    this.router.navigate(['/edit/' + id]);
  }

}
