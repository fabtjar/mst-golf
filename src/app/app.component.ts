import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocketService } from './socket.service';

type Player = {
  MSTID: number;
  First: string;
  Last: string;
  Nationality: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[] = []
  socket = inject(SocketService);
  
  constructor() {
    this.socket.onDataUpdate.subscribe(data => {
      console.log(data);
      this.players.push(data);
    });
  }
}
