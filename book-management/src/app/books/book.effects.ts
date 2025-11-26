import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";


@Injectable()
export class BookEffects {

    constructor(
        private actions$: Actions, // an Observable of <Action>s that contains all actions that got dispatched in the application
        private bookService: BookService
    ) { }

    addBook$ = createEffect(() => this.actions$.pipe(
        // we run this effect only if a cetain ACTION occurs, e.g. AddBook
        ofType(bookActions.AddBook),

        // take observables and transform them into a single observable
        mergeMap(
            // book is the payload of AddBook action
            (book) => this.bookService.addBook(book) // this is an Observable => use pipe on it
                .pipe(
                    map(book => bookActions.AddBookSuccess(book)),
                    catchError((error) => of(bookActions.AddBookFailure({ error })))
                ))
    ));


}