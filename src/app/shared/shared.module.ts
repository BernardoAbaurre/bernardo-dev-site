import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageCardComponent } from './components/page-card/page-card.component';
import { ShareBtnDirective } from './directives/share-btn.directive';
import { CopyClipboardBtnDirective } from './directives/copy-clipboard-btn.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    PageCardComponent,
    ShareBtnDirective,
    CopyClipboardBtnDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    PageCardComponent,
    ShareBtnDirective,
    CopyClipboardBtnDirective
  ]
})
export class SharedModule { }
