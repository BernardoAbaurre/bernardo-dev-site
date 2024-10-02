import { ConnectionStatusEnum } from './../../../shared/models/enums/connection-status.enum';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlayerResponse } from 'src/app/tic-tac-toe/players/models/responses/player.response';

@Component({
  selector: 'app-player-dial',
  templateUrl: './player-dial.component.html'
})
export class PlayerDialComponent implements OnInit, OnChanges {

  @Input() player : PlayerResponse
  imageUrl : string;

  circleImageUrl: string = "../../../../../assets/images/tic-tac-toe/circulo.png";
  crossImageUrl: string = "../../../../../assets/images/tic-tac-toe/x.png";

  connectedStatus: ConnectionStatusEnum.Connected;
  notConnectedStatus: ConnectionStatusEnum.NotConnected;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['player'])
    {
      this.imageUrl = this.player.PlayerType == 2 ? this.circleImageUrl : (this.player.PlayerType == 1 ? this.crossImageUrl : "");
    }
  }

  ngOnInit(): void {
    this.imageUrl = this.player.PlayerType == 2 ? this.circleImageUrl : (this.player.PlayerType == 1 ? this.crossImageUrl : "");
  }

}
