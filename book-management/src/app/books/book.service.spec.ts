import { Book } from './../models/book';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should add a new book', () => {
    // let b: Book = new Book('1','title','author');
    // service.addBook({id:'1', title:'title', author: 'author'})
    
    expect(service.addBook({id:'1', title:'title', author: 'author'})).toBeTruthy();
  });

});
