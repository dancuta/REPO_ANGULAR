import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book):Observable<Book>{
    return of(book);// creates / mocks an observable with the book received as param
  }

  // mock error
  // addBook(book: Book):Observable<Book>{
  //   const err =new Error("Mock error from BookService");
  //   return throwError(() => err);
  // }
}
