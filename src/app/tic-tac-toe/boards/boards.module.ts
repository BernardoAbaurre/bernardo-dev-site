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
import { PlayerDialComponent } from './components/player-dial/player-dial.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BoardComponent,
    GameComponent,
    NewGameComponent,
    CellComponent,
    NewPlayerModalComponent,
    PlayerDialComponent,
    ShareBtnComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    SharedModule
  ]
})
export class BoardsModule { }
