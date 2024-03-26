import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dicedelice';

  public pokemonId:number =-1
  constructor(
    public apiService:ApiService
  ){}
  ngOnInit(){}

  public getPkm(){
    this.apiService.getPokemon(this.pokemonId).subscribe(a=>{console.log(a)})
  }
  
}
