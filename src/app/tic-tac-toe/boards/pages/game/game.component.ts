import { BoardsService } from './../../services/boards.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BoardResponse } from '../../models/responses/board.response';
import { PlayersService } from 'src/app/tic-tac-toe/players/services/players.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PlayerResponse } from 'src/app/tic-tac-toe/players/models/responses/player.response';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  boardId: string;
  playerId: string;
  board: BoardResponse
  connectionId: string;
  turn: PlayerResponse;

  constructor(private boardsService: BoardsService, private route: ActivatedRoute, private playersService: PlayersService) { }

  async ngOnInit(): Promise<void> {
    this.boardId = this.route.snapshot.params['boardId'];
    this.playerId = this.route.snapshot.params['playerId'];

    await this.getBoard();
    this.boardsService.iniciar().then(() => {this.joinBoard()});
    this.boardsService.boardEvent.subscribe(board => {
       this.board = board;
       this.turn = board.Players.find(p => p.Turn);
    })
  }

  public async getBoard() {
    return new Promise<void>(resolve => {
      this.boardsService.getBoardById(this.boardId).subscribe({
        next: (response) => {
          this.board = response
          this.turn = response.Players.find(p => p.Turn);
        },
        complete: () => {
          resolve();
        }
      });
    })
  }

  public joinBoard() {
    this.boardsService.joinBoard(this.board.Id, this.playerId)
    .then((connectionId) => {this.connectionId = connectionId});
  }

  public play(fieldIndex: number)
  {
    if(this.turn.Id == this.playerId && this.board.Fields[fieldIndex] == 0)
    {
      this.boardsService.play(this.board.Id, fieldIndex, this.playerId);
    }
  }

  public restart()
  {
    this.boardsService.restart(this.board.Id);
  }
}
