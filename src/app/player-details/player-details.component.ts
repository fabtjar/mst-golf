import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PlayerDataService } from '../player-data.service';
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
  router = inject(Router);
  playerData = inject(PlayerDataService);
  player!: Player;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    const player = this.playerData.getPlayerById(id);
    if (player) this.player = player;
    else this.router.navigate(['']);
  }
}
