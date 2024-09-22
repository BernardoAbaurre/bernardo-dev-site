import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './boards/pages/game/game.component';
import { NewGameComponent } from './boards/pages/new-game/new-game.component';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new-game',
    pathMatch: 'full',
  },
  {
    path: 'game/:boardId/:playerId',
    component: GameComponent
  },
  {
    path: 'new-game',
    component: NewGameComponent
  },
  {
    path: 'new-game/:boardId',
    component: NewGameComponent
  },
  {
    path: 'a',
    component: TicTacToeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
