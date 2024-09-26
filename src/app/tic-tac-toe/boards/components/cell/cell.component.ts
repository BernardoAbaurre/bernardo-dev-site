import { Component, Input, OnInit } from '@angular/core';
import { FieldStatusEnum } from '../../models/enums/field-status.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() status: number = FieldStatusEnum.Empty;
  @Input() activeTurn: boolean;

  circleImageUrl: string = "../../../../../assets/images/tic-tac-toe/circulo.png";
  crossImageUrl: string = "../../../../../assets/images/tic-tac-toe/x.png";

  imageUrl = this.status == 2 ? this.circleImageUrl : (this.status == 1 ? this.crossImageUrl : "");

  constructor() { }

  ngOnInit(): void {
    console.log(this.status);
  }

}
