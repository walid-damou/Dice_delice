import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book!:any;
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
