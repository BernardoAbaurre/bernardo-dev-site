import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardResponse } from '../../models/responses/board.response';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board : BoardResponse
  @Input() activeTurn: boolean
  @Output('play') playEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public play(index: number)
  {
    this.playEvent.emit(index);
  }

}
