import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  searchText:string="";
  @Output() OnChangeSearchText:EventEmitter<string>=new EventEmitter<string>();

  OnChnageSearchText()
  {
    this.OnChangeSearchText.emit(this.searchText);
  }


}
