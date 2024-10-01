import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/tic-tac-toe/players/services/players.service';
import { PlayerNewRequest } from 'src/app/tic-tac-toe/players/models/requests/player-new.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-player-modal',
  templateUrl: './new-player-modal.component.html'
})
export class NewPlayerModalComponent implements OnInit {

  @Input() boardId: string;

  playerName: string;

  constructor(private bsModalRef : BsModalRef, private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
  }

  public savePlayer()
  {
    const request : PlayerNewRequest = {BoardId: this.boardId, Name: this.playerName }
    this.playersService.newPlayer(request).subscribe({
          next: (response) => {
            this.bsModalRef.hide();
            this.router.navigate([`tic-tac-toe/game/${this.boardId}/${response.Id}`]);
          }
        });
  }

  closeModal()
  {
    this.bsModalRef.hide();
  }

}
