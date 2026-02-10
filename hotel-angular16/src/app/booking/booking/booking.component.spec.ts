import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookingComponent as BookingComponent } from './booking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewBookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
        // add necessary imports like ReactiveFormsModule, RouterTestingModule, etc.
      ],

      // Anything injected via a constructor must appear here (unless auto-provided).
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({ id: '123' })
            }
          },
          
        }

      ]
    });
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
