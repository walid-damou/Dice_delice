import { Component,OnInit } from '@angular/core';
import { GameService } from '../../service/gameService/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{
  games:any;
  searchText:string="";


  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames() {
    this.gameService.listGames().subscribe((games) => {
      this.games = games;
      // console.log(games);
    });
  }

  showMsg(text: any)
  {
    this.searchText=text;
  }
}
