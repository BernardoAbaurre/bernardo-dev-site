import { FieldStatusEnum } from "src/app/tic-tac-toe/boards/models/enums/field-status.enum";

export class PlayerResponse {
  Id: string;
  Name: string;
  Connected: boolean;
  PlayerType: FieldStatusEnum;
  Turn: boolean;

  constructor(params: { id: string; name: string; connected: boolean; playerType: FieldStatusEnum, turn: boolean}) {
    this.Id = params.id;
    this.Name = params.name;
    this.Connected = params.connected;
    this.PlayerType = params.playerType;
    this.Turn = params.turn;
  }
}
