import { Component } from '@angular/core';

@Component({
  selector: 'hotel-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Welcome to Our Hotel Booking System';
}
