import { Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { AppConstants } from '../../utils/app.constants';


@Injectable({
  providedIn: 'root',
})
export class HttpReservationService {

  lastId: number = 0;
  reservations: ReservationModel[] = [];
   private REZERVATIONS_ENDPOINT = AppConstants.RESERVATION_BASE_URL;

  constructor(private http: HttpClient) { }

  getReservations(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(this.REZERVATIONS_ENDPOINT);
  }

  getReservationById(id: number): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(this.REZERVATIONS_ENDPOINT + "/" + id);
  }

  addReservation(r: ReservationModel):  Observable<ReservationModel> {
    return this.http.post<ReservationModel>(this.REZERVATIONS_ENDPOINT + "/" + r.id, r);
  }

  updateReservation(r: ReservationModel):  Observable<ReservationModel> {
    return this.http.put<ReservationModel>(this.REZERVATIONS_ENDPOINT + "/" + r.id, r);
  }

  deleteReservation(id: number): Observable<any> {
     return this.http.delete<any>(
      this.REZERVATIONS_ENDPOINT+ "/" + id, 
      { observe: 'response' });
  }

  displayReservation(r: ReservationModel): void {
    console.log("Reservation is: # " + r.id + " Name: " + r.guestName + " CheckIn: " + r.checkInDate + " CheckOut: " + r.checkOutDate + " Room#: " + r.roomNumber);
  }

}
