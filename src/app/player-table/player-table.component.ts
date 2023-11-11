import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket.service';
import { Player } from '../player';
import { PlayerRowComponent } from '../player-row/player-row.component';

@Component({
  selector: 'app-player-table',
  standalone: true,
  imports: [CommonModule, PlayerRowComponent],
  templateUrl: './player-table.component.html',
  styleUrl: './player-table.component.css'
})
export class PlayerTableComponent {
  players: Player[] = [];
  socket = inject(SocketService);
  
  constructor() {
    this.socket.onDataUpdate.subscribe((player: Player) => {
      let index = this.players.findIndex(p => p.MSTID === player.MSTID);
      if (index < 0) index = this.players.length;
      this.players[index] = player;
    });
  }
}
