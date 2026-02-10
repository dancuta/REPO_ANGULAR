import { BookingModel } from './../../models/booking-model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingsComponent } from './list-bookings.component';
import { BookingService } from '../services/booking-service.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListBookingsComponent - V2', () => {
  let component: ListBookingsComponent;
  let fixture: ComponentFixture<ListBookingsComponent>;
  // let bookingService: BookingService;
  let bookingServiceSpy: jasmine.SpyObj<BookingService>;


  beforeEach(async () => {



    //  bookingService = TestBed.inject(BookingService);
    bookingServiceSpy = jasmine.createSpyObj<BookingService>('BookingService', ['getBookingById', 'getAllBookings', 'deleteBooking', 'addBooking', 'updateBooking']);
    bookingServiceSpy.getBookingById.and.returnValue(of(booking1));
    bookingServiceSpy.getAllBookings.and.returnValue(of([booking1, booking2]));
    bookingServiceSpy.deleteBooking.and.returnValue(of({ status: 204 } as any));
    bookingServiceSpy.addBooking.and.returnValue(of({ status: 201, body: booking1 } as any));


    await TestBed.configureTestingModule({
      declarations: [ListBookingsComponent],
      // imports: [HttpClientTestingModule],
      providers: [
        { provide: BookingService, useValue: bookingServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // triggers ngOnInit and loads bookings

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllBooking should return valid data', () => {
    component.getAllBookings();
    expect(component.bookings).toBeDefined();
    expect(component.bookings.length).toBeGreaterThanOrEqual(2);
  });

  it('getCountBookings should return valid data', () => {
    let count = component.getCountBookings();
    expect(count).toBeDefined();
    console.log("Count bookings: " + count);
    expect(count).toEqual(2);
  });

  it('delete should return valid data', () => {
    component.deleteBooking(1);
    expect(bookingServiceSpy.deleteBooking).toHaveBeenCalledWith(1);
  });

  it('should initialize bookings on ngOnInit', () => { 
    expect(bookingServiceSpy.getAllBookings).toHaveBeenCalled();
    expect(component.bookings).toBeDefined();
    expect(component.bookings.length).toBeGreaterThanOrEqual(2);
  });

  it('should delete a booking and update the list when clicking on Delete button', () => {
     // reset spy calls to ignore ngOnInit call
    bookingServiceSpy.getAllBookings.calls.reset();

    console.log("Bookings before delete: ", component.bookings);

    const button = fixture.debugElement.query(By.css('#delete-btn'));
    button.triggerEventHandler('click', 101);

    console.log("Bookings after delete: ", component.bookings);

    expect(bookingServiceSpy.deleteBooking).toHaveBeenCalledWith(1);
    expect(component.bookings.length).toEqual(1);
    expect(component.bookings[0].id).toEqual(2);
 
  });

  const booking1 = {
    id: 1,
    guestName: 'John Doe',
    roomNumber: 101,
    checkInDate: new Date('2024-01-01'),
    checkOutDate: new Date('2024-01-05')
  } as BookingModel;

  const booking2 = {
    id: 2,
    guestName: 'Jane Smith',
    roomNumber: 102,
    checkInDate: new Date('2024-02-01'),
    checkOutDate: new Date('2024-02-05')
  } as BookingModel;

  // const mockedBookings = [booking1, booking2];
});
