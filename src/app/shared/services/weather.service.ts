import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment.apis.bernardoDevApi + 'weather';

  public getAll() : Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
