import { FieldStatusEnum } from "../enums/field-status.enum";

export class UserResponse
{
  ConnectionId: string;
  Connected: boolean;
  PlayerType: FieldStatusEnum;
}
