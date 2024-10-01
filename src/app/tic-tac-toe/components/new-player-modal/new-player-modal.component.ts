import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PlayerNewRequest } from 'src/app/tic-tac-toe/players/models/requests/player-new.request';
import { PlayersService } from 'src/app/tic-tac-toe/players/services/players.service';

import { BoardsService } from '../../boards/services/boards.service';

@Component({
  selector: 'app-new-player-modal',
  templateUrl: './new-player-modal.component.html'
})
export class NewPlayerModalComponent implements OnInit {

  @Input() boardId?: string;

  playerName: string;

  constructor(private bsModalRef : BsModalRef, private playersService: PlayersService, private router: Router, private boardsService: BoardsService) { }

  ngOnInit(): void {
  }

  public savePlayer()
  {
    if(!this.boardId)
    {
      this.boardsService.newBoard().subscribe({
        next: (response) => {
          this.boardId = response.Id;
          this.newPlayer();
        }
      });
    }
    else
    {
      this.newPlayer();
    }
  }

  private newPlayer()
  {
    const request : PlayerNewRequest = {BoardId: this.boardId, Name: this.playerName }
    this.playersService.newPlayer(request).subscribe({
          next: (response) => {
            this.bsModalRef.hide();
            this.router.navigate([`tic-tac-toe/game/${this.boardId}/${response.Id}`]);
          }
        });
  }

  public closeModal()
  {
    this.bsModalRef.hide();
  }

}
