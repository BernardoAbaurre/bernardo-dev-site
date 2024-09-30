import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
import { BoardsModule } from './boards/boards.module';


@NgModule({
  declarations: [
    TicTacToeComponent,
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
    FormsModule,
    BoardsModule
  ]
})
export class TicTacToeModule { }
