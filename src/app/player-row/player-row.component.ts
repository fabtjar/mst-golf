import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../player';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tr[app-player-row]',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './player-row.component.html',
  styleUrl: './player-row.component.css'
})
export class PlayerRowComponent {
  @Input() player!: Player;
}
