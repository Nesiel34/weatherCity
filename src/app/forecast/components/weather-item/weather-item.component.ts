import { Component, Input, OnInit } from '@angular/core';
import { List } from '../weather/Models/IForecast.interface';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit{
  @Input() weatherObj!:List;

  icon:string = "https://openweathermap.org/img/wn/";
  ngOnInit(): void {
    this.icon +=this.weatherObj.weather[0].icon +".png";
  }


}
