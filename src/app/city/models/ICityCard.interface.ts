export interface ICityCard{
  image?:string;
  timezone?:Date;
  full_name:string;
  population?:number;
  location:Location;
}

export interface Location{
  latitude:number;
  longitude:number;
}
