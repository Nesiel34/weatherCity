import { Component, Input, OnInit } from '@angular/core';
import { ICityCard } from '../../models/ICityCard.interface';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrls: ['./card-city.component.scss']
})
export class CardCityComponent implements OnInit{

 @Input() cityObj!:ICityCard;

googleMaps:string = "https://maps.google.com/?q=";
ngOnInit(): void {
  if(this.cityObj.location){
    this.googleMaps +=this.cityObj.location.latitude +","+this.cityObj.location.longitude
  }
}


}
