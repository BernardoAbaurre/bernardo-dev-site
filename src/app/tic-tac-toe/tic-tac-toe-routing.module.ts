import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { NewGameComponent } from './pages/new-game/new-game.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
