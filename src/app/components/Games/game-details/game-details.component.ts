import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  @Input() game!:any;
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
