import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardsModule } from './boards/boards.module';
import { GameComponent } from './pages/game/game.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameOverModalComponent } from './components/game-over-modal/game-over-modal.component';
import { PlayerDialComponent } from './components/player-dial/player-dial.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { SharedModule } from '../shared/shared.module';
import { NewPlayerModalComponent } from './components/new-player-modal/new-player-modal.component';


@NgModule({
  declarations: [
    GameComponent,
    NewGameComponent,
    GameOverModalComponent,
    PlayerDialComponent,
    ShareBtnComponent,
    NewPlayerModalComponent,
  ],
  imports: [
    BoardsModule,
    CommonModule,
    TicTacToeRoutingModule,
    FormsModule,
    BoardsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TicTacToeModule { }
