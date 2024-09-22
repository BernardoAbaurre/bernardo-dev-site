import { BehaviorSubject } from "rxjs";
import * as signalR from '@microsoft/signalr';
import { ConnectionStatusEnum } from "./models/enums/connection-status.enum";

export class HubConnectionHelper
{
  protected hubConnection: signalR.HubConnection
  public connectionStatus$: BehaviorSubject<ConnectionStatusEnum> = new BehaviorSubject<ConnectionStatusEnum>(ConnectionStatusEnum.NotConnected);
  protected hubUrl: string;


  public iniciar() : Promise<void>
  {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.hubUrl,{
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build();

    this.connectionStatus$.next(ConnectionStatusEnum.Connecting);

   return this.hubConnection.start()
    .then(() => {
      this.connectionStatus$.next(ConnectionStatusEnum.Connected)
      this.AfterStart();
      this.monitorConnectionStatus();
    })
    .catch(err => {
      this.connectionStatus$.next(ConnectionStatusEnum.NotConnected)
    });
  }

  protected monitorConnectionStatus() {

    this.hubConnection.onclose(() => {
      this.connectionStatus$.next(ConnectionStatusEnum.NotConnected);
    });

    this.hubConnection.onreconnecting(() => {
      this.connectionStatus$.next(ConnectionStatusEnum.Reconnecting);
      console.log('SignalR Reconnecting');
    });

    this.hubConnection.onreconnected(() => {
      this.connectionStatus$.next(ConnectionStatusEnum.Connected);
      console.log('SignalR Reconnected');
    });
  }

  protected AfterStart()
  {
    console.log("Connection Started");
  }
}
