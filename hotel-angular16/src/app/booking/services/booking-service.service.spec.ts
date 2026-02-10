import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookingModel } from 'src/app/models/booking-model';
import { AppUtils } from 'src/app/utils/app-utils.service';

describe('BookingServiceService', () => {
  let sut: BookingService; // it is initialized in beforeEach block, so it is not assigned here
  let httpMock: HttpTestingController;

  beforeEach(() => {
    
    // create a testing environment for the service
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingService]
    });

    // create a fresh instance of the service and http mock for each test
    sut = TestBed.inject(BookingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('getAllBookings should return mocked data', () => {

    sut.getAllBookings().subscribe(bookings => {
      expect(bookings.length).toBe(2);
    });

    httpMock.expectOne(`${AppUtils.RESERVATION_BASE_URL}`)
      .flush(mockeBookingList);

  });


  it('getBookingById should return mocked data', () => {

    let bookingId = 101;
    sut.getBookingById(bookingId).subscribe(booking => {
      expect(booking.id).toBe(101);
    });

    httpMock.expectOne(`${AppUtils.RESERVATION_BASE_URL}/${bookingId}`)
      .flush(mockBooking1);

  });

  it('addBooking should return created data', () => {

    sut.addBooking(mockBooking1).subscribe(response => {
      expect(response.status).toBe(201);
      expect(response.body?.id).toBe(101);
      expect(response.body).toEqual(mockBooking1);
    });

    let request = httpMock.expectOne(`${AppUtils.RESERVATION_BASE_URL}`);
    expect(request.request.method).toBe('POST');
    request.flush(mockBooking1,
      { status: 201, statusText: 'Created' });

  });

  it('deleteBooking should delete data', () => {
    let bookingId = 101;

    sut.deleteBooking(bookingId).subscribe(response => {
      expect(response.status).toBe(204);
    });

    let request = httpMock.expectOne(`${AppUtils.RESERVATION_BASE_URL}/${bookingId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(bookingId,
      { status: 204, statusText: 'No Content' });
  });



  const mockBooking1 = {
    "id": 101,
    "checkInDate": new Date("2024-07-01"),
    "checkOutDate": new Date("2024-07-05"),
    "guestName": "John Doe1",
    "roomNumber": 101
  } as BookingModel;

  const mockBooking2 =
    {
      "id": 102,
      "checkInDate": new Date("2024-07-02"),
      "checkOutDate": new Date("2024-08-02"),
      "guestName": "John Doe2",
      "roomNumber": 102
    } as BookingModel;

  const mockeBookingList = [mockBooking1, mockBooking2];

});

