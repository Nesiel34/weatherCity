import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForecast } from './components/weather/Models/IForecast.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }


  getForecast(lat:number,lon:number){
    return this.http.get<IForecast>(`${environment.weather}lat=${lat}&lon=${lon}`);

  }
}
