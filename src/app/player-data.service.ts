import { EventEmitter, Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  players: Player[] = [];
  onPlayerUpdate = new EventEmitter<Player>();

  constructor() {
    const socket = io('https://mst-full-stack-dev-test.herokuapp.com/');
    socket.on('data-update', (player: Player) => {

      let index = this.players.findIndex(p => p.MSTID === player.MSTID);
      if (index < 0) index = this.players.length;
      this.players[index] = player;

      this.onPlayerUpdate.emit(player);
    });
  }

  getAllPlayers(): Player[] {
    return this.players;
  }

  getPlayerById(id: number): Player | undefined {
    return this.players.find(p => p.MSTID === id);
  }
}
