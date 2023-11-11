import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket.service';

type Player = {
  MSTID: number,
  Match: number,
  First: string,
  Last: string,
  Nationality: string,
  SOD: string,
  Score: number,
  Today: number,
  Hole1Strokes: number,
  Hole1STP: number,
  Hole2Strokes: number,
  Hole2STP: number,
  Hole3Strokes: number,
  Hole3STP: number,
  Hole4Strokes: number,
  Hole4STP: number,
  Hole5Strokes: number,
  Hole5STP: number,
  Hole6Strokes: number,
  Hole6STP: number,
  Hole7Strokes: number,
  Hole7STP: number,
  Hole8Strokes: number,
  Hole8STP: number,
  Hole9Strokes: number,
  Hole9STP: number,
  OutStrokes: number,
  OutSTP: number,
  Hole10Strokes: number,
  Hole10STP: number,
  Hole11Strokes: number,
  Hole11STP: number,
  Hole12Strokes: number,
  Hole12STP: number,
  Hole13Strokes: number,
  Hole13STP: number,
  Hole14Strokes: number,
  Hole14STP: number,
  Hole15Strokes: number,
  Hole15STP: number,
  Hole16Strokes: number,
  Hole16STP: number,
  Hole17Strokes: number,
  Hole17STP: number,
  Hole18Strokes: number,
  Hole18STP: number,
  InStrokes: number,
  InSTP: number,
  TotalStrokes: number,
  TotalSTP: number,
  tournamentID: number,
  round: number,
  orderInMatch: string,
  lastUpdated: string,
  status: number,
  leaderboardID: string,
  teeStart: number,
  teeTime: string,
  holesPlayed: number,
  course: number,
  matchID: number,
  Amature: string,
  isTeam: string,
  CalculatedRankInteger: number,
  position: number,
  UniquePosition: number,
  TVName: string,
  Eastern: string,
  Handicap: string,
  SortPriority: string,
  Sex: string,
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
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
