import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ListBookingsComponent } from './booking/list-bookings/list-bookings.component';
import { NewBookingComponent } from './booking/booking/booking.component';
import { CommonModule } from '@angular/common';
import { SignalComponentComponent } from './signal/signal-component/signal-component.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  // { path: '', component: ContentComponent},
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListBookingsComponent },
  { path: 'new', component: NewBookingComponent },
  { path: 'edit/:id', component: NewBookingComponent },
  { path: 'signals', component: SignalComponentComponent },
  { path: 'products', component: ProductListComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
