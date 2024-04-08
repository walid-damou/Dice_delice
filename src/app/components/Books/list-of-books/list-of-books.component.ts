import { Component, Input } from '@angular/core';
import { BookService } from '../../../service/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrl: './list-of-books.component.css'
})
export class ListOfBooksComponent {
  @Input() books!:any[];
  @Input() searchText:string="";
  p:number=1;

  constructor(private bookService : BookService , private router:Router){ }

  ngOnInit(): void {
    const listbooks = this.bookService.listBooks();
    listbooks.subscribe(listbooks => {
    this.books = listbooks['items'];
    console.log("books:",this.books);
    });
 
  }

}
