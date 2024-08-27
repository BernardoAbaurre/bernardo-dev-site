import { WeatherService } from './../shared/services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub-page',
  templateUrl: './hub-page.component.html'
})
export class HubPageComponent implements OnInit {

  weather: any;

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getAll().subscribe(weather => {this.weather = weather})
  }

}
