import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) { }
  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(this.baseurl+'pokemon/'+id);
  }
}
