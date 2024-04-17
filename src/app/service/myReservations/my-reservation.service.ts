import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyReservationService {

  private gameNameMapping: { [id: string]: string } = {
    '6EOxjXgpjZiwcTTDnR1t': 'Uno',
    'JQ9XoSpKpmSTzB5yqEOC': 'Scrabble',
    'LeLkcyQgDws5RK0JsO3s': 'Monopoly',
    'grvmhers8KRhY3t5U9rM': 'Jenga',
    'q6Z8hd8XIThhOSpGEXHh': 'Ludo'
  };

  constructor(private db: AngularFirestore) { }

  getReservations(): Observable<any[]> {
    return this.db.collection('Reservations').valueChanges().pipe(
      map((reservations: any[]) => {
        return reservations.map(reservation => {
          const gameId = reservation.id_game;
          const gameName = this.gameNameMapping[gameId] || 'Unknown Game';
          return { ...reservation, game_name: gameName };
        });
      })
    );
  }
}
