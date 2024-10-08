import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { BoardsService } from '../../boards/services/boards.service';
import { NewPlayerModalComponent } from '../../components/new-player-modal/new-player-modal.component';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html'
})
export class NewGameComponent implements OnInit {

  boardId: string;

  constructor(private readonly boardsService: BoardsService, private readonly router: Router, private toastr: ToastrService, private route: ActivatedRoute, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.boardId = this.route.snapshot.params['boardId'];
    if(this.boardId) {
      this.joinGame();
    }
  }

  public joinGame() {
    this.boardsService.getBoardById(this.boardId).subscribe({
      next: (response) => {
        this.openNewPlayerModal(response.Id);
      }
    });
  }

  public openNewPlayerModal(boardId?: string) {
    this.bsModalService.show(NewPlayerModalComponent, {
      initialState: {boardId: boardId}
    });
  }

}
