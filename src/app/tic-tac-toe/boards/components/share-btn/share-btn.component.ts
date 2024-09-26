import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-btn',
  templateUrl: './share-btn.component.html'
})
export class ShareBtnComponent implements OnInit {
  @Input() boardId: string;

  shareUrl: string
  constructor() { }

  ngOnInit(): void {
    this.shareUrl = `${window.location.origin}/tic-tac-toe/new-game/${this.boardId}`;
  }

}
