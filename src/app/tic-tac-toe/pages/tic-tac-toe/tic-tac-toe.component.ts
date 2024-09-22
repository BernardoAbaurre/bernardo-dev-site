import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html'
})
export class TicTacToeComponent implements OnInit {

  constructor(private readonly toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success("saaaaaaa")
  }

  public showToast(): void {
    this.toastr.success('Teste manual!', 'Sucesso');
  }
}
