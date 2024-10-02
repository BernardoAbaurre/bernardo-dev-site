import { Component, Input, OnInit } from '@angular/core';
import { ConnectionStatusEnum } from '../../models/enums/connection-status.enum';

@Component({
  selector: 'app-connection-status-indicator',
  templateUrl: './connection-status-indicator.component.html',
  styleUrls: ['./connection-status-indicator.component.css']
})
export class ConnectionStatusIndicatorComponent implements OnInit {
  // @Input() status? : ConnectionStatusEnum = ConnectionStatusEnum.NotConnected;
  @Input() status : boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.status);
  }

}
