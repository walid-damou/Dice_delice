import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
   

  constructor(private db:AngularFirestore) { }

  listGames(): Observable<any[]> {
    const games = this.db.collection('Games').valueChanges();
    return games;
  }
    

}
 