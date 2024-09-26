import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShareBtn]'
})
export class ShareBtnDirective {
  @Input() text: string;
  @Input() url?: string;

  @HostListener('click')
  onClick()
  {
    this.shareText();
  }

  constructor() {
   }

  shareText() {
    if (navigator.share) {
      navigator.share({
        text: this.text,
        url: this.url,
        title: this.text
      })
    } else {
      alert('Sharing is not suported in this browser');
    }
  }

}
