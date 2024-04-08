import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  url: string = 'https://www.googleapis.com/books/v1/volumes';
 

  constructor(private http: HttpClient) { }

  listBooks(): Observable<any> {
    return this.http.get<any>(this.url + '?q=quilting');
  }
  
}
