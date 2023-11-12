import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SocketService } from '../socket.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  route = inject(ActivatedRoute);
  socket = inject(SocketService);
  player!: Player;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.player = this.socket.getPlayerById(id) as Player;
  }
}
