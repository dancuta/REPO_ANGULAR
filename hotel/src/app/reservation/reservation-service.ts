import { Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {

  lastId: number = 0;
  reservations: ReservationModel[] = [];


  constructor() {
    // construct a fake rezervation list
    this.initWithFakeReservations();
  }

  getAll(): ReservationModel[] {

    const list = localStorage.getItem("reservations");

    console.log("Loaded " + (list ? JSON.parse(list).length : 0) + " reservations from local storage.");

    return list ? JSON.parse(list) : [];
  }

  getCount(): number {
    return this.getAll().length;
  }

  getById(id: number): ReservationModel | undefined {
    return this.getAll().find(r => r.id === id);
  }

  create(r: ReservationModel): number {
    this.lastId++;
    r.id = this.lastId;
    this.reservations.push(r);

    // update local storage
    this.saveAppointmentsIntoLocalStorage();
    return r.id;
  }

  update() {

  }

  delete(id: number) {
    const rezervationList = this.getAll();

    this.reservations = rezervationList.filter(r => r.id != id);
    // update local storage
    this.saveAppointmentsIntoLocalStorage();
  }

  displayReservation(r: ReservationModel): void {
    console.log("Reservation is: # " + r.id + " Name: " + r.guestName + " CheckIn: " + r.checkInDate + " CheckOut: " + r.checkOutDate + " Room#: " + r.roomNumber);
  }

  private saveAppointmentsIntoLocalStorage(): void {
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  initWithFakeReservations() {
    this.reservations.push({ id: ++this.lastId, checkInDate: new Date('2024-07-01'), checkOutDate: new Date('2024-07-05'), guestName: "John Doe", roomNumber: 101 });
    this.reservations.push({ id: ++this.lastId, checkInDate: new Date('2024-07-01'), checkOutDate: new Date('2024-07-05'), guestName: "Jane Doe", roomNumber: 102 });
    this.reservations.push({ id: ++this.lastId, checkInDate: new Date('2024-07-01'), checkOutDate: new Date('2024-07-05'), guestName: "Joana Doe", roomNumber: 103 });

    console.log(this.reservations);

  }
}
