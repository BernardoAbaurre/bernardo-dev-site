import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../../models/classes/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;

  imageUrl: string;

  circleImageUrl: string = "../../../../../assets/images/tic-tac-toe/circulo.png";
  crossImageUrl: string = "../../../../../assets/images/tic-tac-toe/x.png";


  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.cell.Status == 2 ? this.circleImageUrl : (this.cell.Status == 1 ? this.crossImageUrl : "");
  }

}
