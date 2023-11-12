import { Routes } from '@angular/router';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

export const routes: Routes = [
    {
        path: '',
        component: PlayerTableComponent,
        title: 'Players',
      },
      {
        path: 'player/:id',
        component: PlayerDetailsComponent,
        title: 'Player details',
      },
];
