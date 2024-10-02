import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { ToastrModule } from 'ngx-toastr';
import { CellComponent } from './components/cell/cell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    BoardComponent,
    CellComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    SharedModule,
    NgxSpinnerModule,
  ],
  exports: [BoardComponent]
})
export class BoardsModule { }
