import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions"; // actions defined in book.actions.ts

// The reducer must know of Book - it only ake care of a segment of app state ( here: books)
import { Book } from "../models/book";


// mandatory initialState
export const initialState: Book[] = []; // initial state does not need to be read-only, only the book in AppState is read-only

// REDUCER: copy current state segment, make changes, return new state
export const BookReducer = createReducer(
    initialState,

    // ...state   copy an array from previous state and add {id, title, author}

    // add book
    on(AddBook, (state) => { return state }), 
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => {
        console.error(error);
        return state;
    }),


    // remove book
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);

