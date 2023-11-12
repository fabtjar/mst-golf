import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDataService } from '../player-data.service';
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
  playerData = inject(PlayerDataService);
  
  constructor() {
    this.players = this.playerData.getAllPlayers();
    this.playerData.onPlayerUpdate.subscribe(() => this.players = this.playerData.getAllPlayers());
  }
}
