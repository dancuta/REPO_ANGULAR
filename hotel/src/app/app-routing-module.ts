import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component/content.component';
import { ReservationFormComponent } from './reservation/reservation-form.component/reservation-form.component';
import { ReservationListComponent } from './reservation/reservation-list.component/reservation-list.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'new', component: ReservationFormComponent },
  { path: 'edit/:id', component: ReservationFormComponent },
  { path: 'list', component: ReservationListComponent},
  { path: 'about', component: AboutComponent }
   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
