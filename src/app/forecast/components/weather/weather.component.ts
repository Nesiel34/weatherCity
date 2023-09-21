import { Component, Input } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { List } from './Models/IForecast.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent{

  constructor(){}

  @Input() weather!:List[];



}
