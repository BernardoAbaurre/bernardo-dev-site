import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PlayerResponse } from 'src/app/tic-tac-toe/players/models/responses/player.response';
import { PlayersService } from 'src/app/tic-tac-toe/players/services/players.service';

import { BoardResponse } from '../../boards/models/responses/board.response';
import { BoardsService } from '../../boards/services/boards.service';
import { GameOverModalComponent } from '../../components/game-over-modal/game-over-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  boardId: string;
  playerId: string;
  myPlayer: PlayerResponse;
  adversary: PlayerResponse;
  board: BoardResponse
  connectionId: string;
  turn: PlayerResponse;
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
  ) { }

  ngOnInit() {
    this.boardId = this.route.snapshot.params['boardId'];
    this.playerId = this.route.snapshot.params['playerId'];
    this.screenWidth = window.innerWidth;

    this.getBoard()

    this.boardsService.boardEvent.subscribe(board => {
      this.setBoard(board);
    })
  }

  private setBoard(board: BoardResponse) {
    this.board = board;
    this.turn = board.Players.find(p => p.Turn);
    this.myPlayer = board.Players.find(p => p.Id == this.playerId);
    this.adversary = board.Players.find(p => p.Id != this.playerId);
  }

  public async getBoard() {
    this.boardsService.getBoardById(this.boardId).subscribe({
      next: (response) => {
        this.setBoard(response);
        this.boardsService.iniciar().then(() => {this.joinBoard()});
      },
    });
  }

  public joinBoard() {
    this.boardsService.joinBoard(this.board.Id, this.playerId)
    .then((connectionId) => {this.connectionId = connectionId});
  }

  public play(fieldIndex: number)
  {
    this.boardsService.play(this.board.Id, fieldIndex, this.playerId);
  }

  public restart()
  {
    this.boardsService.restart(this.board.Id);
  }

  public gameOver(indexes: number[])
  {
    if(indexes.length == 0)
    {
      this.bsModalService.show(GameOverModalComponent)
    }
    else
    {
      this.bsModalService.show(GameOverModalComponent,
        {
          initialState: {player: this.board.Players.find(p => p.PlayerType == this.board.Fields[indexes[0]])}
        }
      )
    }
  }
}
