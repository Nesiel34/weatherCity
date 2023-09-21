import { Component } from '@angular/core';
import { Result } from './models/ICity.interface';
import { CityService } from './city.service';
import { ICityCard } from './models/ICityCard.interface';
import { forkJoin } from 'rxjs';
import { ICityImage } from './models/ICityImage.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityService],
})
export class CityComponent {
  constructor(private cityService: CityService) {}

  cityCardArr: ICityCard[] =[];

  searchValueChange(search: Result) {
    this.cityService
      .getGeoName(search._links['city:item'].href)
      .subscribe((s) => {
        console.log(s);
        if (!this.cityCardArr.some((obj) => obj.full_name == s.full_name)) {
          let obj: ICityCard = {
            full_name: s.full_name,
            population:s.population,
            location:{
              latitude:s.location?.latlon.latitude,
              longitude:s.location?.latlon.longitude
          },
        }
          let arr = [];
          arr.push(this.cityService.getTZCity(s._links['city:timezone'].href));
          if (s._links['city:urban_area']?.href) {
            arr.push(
              this.cityService.getImagesCity(s._links['city:urban_area'].href)
            );
          }
          forkJoin(arr).subscribe((responseList) => {
            if(responseList[0]){
              obj.timezone =<Date>responseList[0];
            }
            if(responseList.length>1){
              obj.image =(responseList[1] as ICityImage).photos[0].image?.mobile;
            }
            else {
              obj.image ="../../../../assets/no_photo.jpg";
            }
          });
          this.cityCardArr.push(obj);
        }
        // this.cityService.getTZCity("https://api.teleport.org/api/timezones/iana:Asia%2FJerusalem/").subscribe(s=>{
        //   console.log(s);
        // });
      });
  }
}
