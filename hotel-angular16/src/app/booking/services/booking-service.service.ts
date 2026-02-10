import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BookingModel } from 'src/app/models/booking-model';

// IMPORTANT: import { HttpClientModule } from '@angular/common/http' ---> in app-module.ts
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AppUtils } from 'src/app/utils/app-utils.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: BookingModel[] = [];

  constructor(private http: HttpClient) {
  }

  getAllBookings(): Observable<BookingModel[]> {
    return this.http.get<BookingModel[]>(AppUtils.RESERVATION_BASE_URL);
  }

  getBookingById(id: number): Observable<BookingModel> {
    return this.http.get<BookingModel>(AppUtils.RESERVATION_BASE_URL + '/' + id)  ;    
  }

  addBooking(booking: BookingModel): Observable<HttpResponse<BookingModel>> {
    return this.http.post<BookingModel>(
      AppUtils.RESERVATION_BASE_URL,
      booking,
      { observe: 'response' }
    );
  }

  deleteBooking(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>
      (AppUtils.RESERVATION_BASE_URL + '/' + id,
        { observe: 'response' }
      );
  }

  updateBooking() {

  }

}
