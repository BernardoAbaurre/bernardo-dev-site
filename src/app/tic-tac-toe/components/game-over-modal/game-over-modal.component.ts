import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PlayerResponse } from 'src/app/tic-tac-toe/players/models/responses/player.response';

@Component({
  selector: 'app-game-over-modal',
  templateUrl: './game-over-modal.component.html'
})
export class GameOverModalComponent implements OnInit {
  @Input() player?: PlayerResponse;

  constructor(private bsModalRef : BsModalRef) { }

  ngOnInit(): void {
  }

  closeModal()
  {
    this.bsModalRef.hide();
  }
}
