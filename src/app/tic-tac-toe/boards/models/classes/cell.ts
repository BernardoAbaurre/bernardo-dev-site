import { FieldStatusEnum } from "../enums/field-status.enum";

export class Cell
{
  Index: number;
  Winner: boolean = false;
  Active: boolean = true;
  Status: FieldStatusEnum = FieldStatusEnum.Empty;
}
