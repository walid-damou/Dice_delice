import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list-of-games',
  templateUrl: './list-of-games.component.html',
  styleUrls: ['./list-of-games.component.css']
})
export class ListOfGamesComponent {

  @Input() games!:any[];
  @Input() searchText:string="";
  p:number=1;
}
