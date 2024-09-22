import { PlayerResponse } from "src/app/tic-tac-toe/players/models/responses/player.response";
import { FieldStatusEnum } from "../enums/field-status.enum";

export class BoardResponse
{
  Id: string;
  Fields: FieldStatusEnum[]
  Playing: boolean;
  Turn: FieldStatusEnum;
  Players: PlayerResponse[];


  constructor(params: {id: string, fields: FieldStatusEnum[], playing: boolean, turn: FieldStatusEnum, players: any}) {
    this.Id = params.id;
    this.Fields = params.fields;
    this.Playing = params.playing;
    this.Turn = params.turn;
    this.Players = params.players.map(p => new PlayerResponse(p))
  }
}
