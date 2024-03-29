import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  url: string = 'http://localhost:8000';
 

  constructor(private http: HttpClient) { }

  listGames(): Observable<any> {
    return this.http.get<any>(this.url + '/api/games');
  }
  

  

}
