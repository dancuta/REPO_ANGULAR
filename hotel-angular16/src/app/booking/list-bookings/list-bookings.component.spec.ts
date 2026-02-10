import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingsComponent } from './list-bookings.component';
import { BookingService } from '../services/booking-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListBookingsComponent', () => {
  let component: ListBookingsComponent;
  let fixture: ComponentFixture<ListBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBookingsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: BookingService, useValue: mockedBookingService }
      ]
    });

    fixture = TestBed.createComponent(ListBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // manually trigger ngOnInit and other lifecycle hooks 


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
    expect(count).toEqual(2);
  });

  const mockedBookingService = {
    getAllBookings: () => {
      return {
        subscribe: (callback: any) => {
          callback(mockedBookings);
        }
      };
    }
  }

  const mockedBookings = [
    {
      id: 1,
      customerName: 'John Doe',
      roomNumber: 101,
      checkInDate: '2024-01-01',
      checkOutDate: '2024-01-05'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      roomNumber: 102,
      checkInDate: '2024-02-01',
      checkOutDate: '2024-02-05'
    }
  ];
});
