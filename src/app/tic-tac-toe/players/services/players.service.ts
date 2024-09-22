import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlayerResponse } from '../models/responses/player.response';
import { Observable } from 'rxjs';
import { PlayerNewRequest } from '../models/requests/player-new.request';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private apiUrl = environment.apis.bernardoDevApi + 'tic-tac-toe/players';

  constructor(private http: HttpClient) {
  }

  public newPlayer(request: PlayerNewRequest) : Observable<PlayerResponse>
  {
    return this.http.post<PlayerResponse>(this.apiUrl, request);
  }
}
