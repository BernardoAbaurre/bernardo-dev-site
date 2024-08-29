import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']

})
export class PageCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
