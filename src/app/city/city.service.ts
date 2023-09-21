import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICity } from './models/ICity.interface';
import { ICityTZ } from './models/ICityTZ.interface';
import { IGeoname } from './models/IGeoname.interface';
import { ICityImage } from './models/ICityImage.interface';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) { }


  getCities(query:string) {
    return this.http.get<ICity>(`${environment.teleport}cities/?search=${query}`).pipe(map(data =>{
      console.log(data);
      return data._embedded['city:search-results'];
    }));
  }

  getGeoName(url:string){
    return this.http.get<IGeoname>(`${url}`)
  }

  getTZCity(url:string){
    let d = new Date();
    return this.http.get<ICityTZ>(`${url}offsets/?date=${d.toISOString()}`).pipe(map(data =>{
      console.log(data);
      return new Date(d.getTime() + data.total_offset_min*60000 +d.getTimezoneOffset()*60000);
      ;
    }));
  }

  getImagesCity(url:string){
    // let d = new Date();
    return this.http.get<ICityImage>(`${url}images`);
    // .pipe(map(data =>{
    //   console.log(data);
    //   return new Date(d.getTime() + data.total_offset_min*60000 +d.getTimezoneOffset()*60000);
    //   ;
    // }));
  }

}
