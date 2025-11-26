import { Book } from "./models/book";


export interface AppState {

    readonly book: Book[]; // use singular, not plural - Angular convension
}
