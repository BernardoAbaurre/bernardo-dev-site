import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './pages/game/game.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { ToastrModule } from 'ngx-toastr';
import { CellComponent } from './components/cell/cell.component';
import { NewPlayerModalComponent } from './components/new-player-modal/new-player-modal.component';



@NgModule({
  declarations: [
    BoardComponent,
    GameComponent,
    NewGameComponent,
    CellComponent,
    NewPlayerModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ]
})
export class BoardsModule { }
