import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { IForecast } from './components/weather/Models/IForecast.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [WeatherService],
})
export class ForecastComponent {
  constructor(private weatherService: WeatherService,private route: ActivatedRoute) {}
  any!: any[];
  forecast!:IForecast;

  ngOnInit(): void {


    this.route.queryParams.subscribe(s=>{

      this.weatherService.getForecast(+s['lat'],+s["lon"]).subscribe((s) => {
        console.log(s);
        this.forecast = s;

        let groups = s.list.reduce(function (r, a) {
          r[new Date(a.dt_txt).setHours(0, 0, 0)] =
            r[new Date(a.dt_txt).setHours(0, 0, 0)] || [];
          r[new Date(a.dt_txt).setHours(0, 0, 0)].push(a);
          return r;
        }, Object.create(null));
        this.any = Object.keys(groups).map((key) => [key, groups[key]]);
        console.log(this.any);
      });

    })


  }
}
