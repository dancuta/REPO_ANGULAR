import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';  
import { AppState } from '../app.state';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$  : Observable<Book[]>;// $ is used, by convention, to indicate it is an Observable;
  // constructor(private store: Store<{ book: Book[] }>) { 
    constructor(private store: Store<AppState>) { 

    // your global state contains a slice named books, which is a list of Book.
    this.books$ = store.pipe(select('book')); // as declared in AppState
      // this.numberOfBooks= this.books$.subscribe()
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId })); // parameter MUST have the same name as in book.action.ts definition
  }
}
