import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

 // [Book] is return type; props: we want to submit a Book to this action
 // props: we define the payload of the action; it is used by REDUCERS and EFFECTS;
 //        a Book is injected as payload into REDUCER / EFFECT
export const AddBook = createAction('[Book] Add book', props<Book>());
export const AddBookSuccess = createAction('[Book] Add Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error: any}>());



export const RemoveBook = createAction('[Book] Remove book', props<{ bookId: string }>()); 


