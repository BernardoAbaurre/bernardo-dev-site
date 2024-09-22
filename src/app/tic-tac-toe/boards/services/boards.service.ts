import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnectionHelper } from 'src/app/shared/hub-conection-helper';
import { environment } from 'src/environments/environment';
import { BoardResponse } from '../models/responses/board.response';
import { HttpClient } from '@angular/common/http';
import { FieldStatusEnum } from '../models/enums/field-status.enum';
import { UserResponse } from '../models/responses/user.response';

@Injectable({
  providedIn: 'root'
})
export class BoardsService extends HubConnectionHelper {
  private apiUrl = environment.apis.bernardoDevApi + 'tic-tac-toe/boards';
  protected override hubUrl = environment.apis.bernardoDevHub + 'tic-tac-toe';

  public boardEvent = new EventEmitter<BoardResponse>();
  public usersEvent = new EventEmitter<UserResponse[]>();

  constructor(private http: HttpClient) {
    super();
  }

  public newBoard() : Observable<BoardResponse>
  {
    return this.http.post<BoardResponse>(this.apiUrl, {});
  }

  public getBoardById(boardId : string) : Observable<BoardResponse>
  {
    return this.http.get<BoardResponse>(this.apiUrl + `/${boardId}`);
  }

  public joinBoard(boardId: string, playerId: string): Promise<string>
  {
    return this.hubConnection.invoke<string>("JoinBoard", boardId, playerId)
  }

  public leaveBoard(boardId: string, playerId: string)
  {
    this.hubConnection.invoke("LeaveBoard", boardId, playerId);
  }

  public play(boardId: string, fieldIndex: number, playerId: string)
  {
    this.hubConnection.invoke("Play", boardId, fieldIndex, playerId);
  }

  public restart(boardId: string)
  {
    this.hubConnection.invoke("Restart", boardId);
  }

  protected override AfterStart(): void {
    this.hubConnection.on("ReceiveUpdateBoard", board => {
      this.boardEvent.emit(new BoardResponse(board));
    });

    this.hubConnection.on("ReceiveUpdateBoard", users => {
      this.usersEvent.emit(users);
    });
  }




}
