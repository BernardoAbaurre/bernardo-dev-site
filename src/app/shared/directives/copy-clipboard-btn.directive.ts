import { Directive, HostListener, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appCopyClipboardBtn]'
})
export class CopyClipboardBtnDirective {
  @Input() text: string;

  @HostListener('click')
  onClick()
  {
    this.copyToClipBoard();
  }

  constructor(readonly toastr: ToastrService) {}

  copyToClipBoard() {
    navigator.clipboard.writeText(this.text)
    .then(() => {this.toastr.success("Board Id was copied to the clipboard")})
  }

}
