import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../../service/gameService/game.service';

@Component({
  selector: 'app-list-of-games',
  templateUrl: './list-of-games.component.html',
  styleUrls: ['./list-of-games.component.css']
})
export class ListOfGamesComponent {

  @Input() games!:any[];
  @Input() searchText:string="";
  p:number=1;

  constructor(private gamesService : GameService , private router:Router){ }

  ngOnInit(): void {
    const gamess = this.gamesService.listGames();
    gamess.subscribe(games => {
      console.log("games Infos",games);
      this.games=games;
      // localStorage.setItem("user_login" , JSON.stringify(user[0]));
    });
 
  }
}
