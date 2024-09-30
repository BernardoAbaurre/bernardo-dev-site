import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BoardResponse } from '../../models/responses/board.response';
import { Cell } from '../../models/classes/cell';
import { BoardsService } from 'src/app/tic-tac-toe/boards/services/boards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() board : BoardResponse
  @Input() activeTurn: boolean
  @Output('play') playEvent = new EventEmitter<number>();
  @Output('gameOver') gameOverEvent = new EventEmitter<number[]>();

  cells: Cell[] | null[] = [null, null, null, null, null, null, null, null, null];

  constructor(private readonly boardsService: BoardsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['board'])
    {
      this.setCells();
    }
  }

  ngOnInit(): void {
    this.boardsService.gameOverEvent.subscribe(indexes =>
    {
      this.gameOver(indexes);
    }
    )
  }

  public gameOver(indexes: number[]): void {
    this.cells.forEach(c => {
      c.Active = false;
      if (indexes.includes(c.Index)) {
        c.Winner = true;
      }
    });
    this.gameOverEvent.emit(indexes);
  }

  public play(index: number)
  {
    this.playEvent.emit(index);
  }

  setCells()
  {
    for (let index = 0; index < 9; index++) {
      const element = this.board.Fields[index];

      this.cells[index] = {Index: index, Active: this.activeTurn, Status: element, Winner: false}
    }
  }
}
