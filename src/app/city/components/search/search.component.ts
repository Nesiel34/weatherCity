import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { Result } from '../../models/ICity.interface';
import { CityService } from '../../city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search!: FormControl;
  searchTxt = "Search for a city";
  @Output() searchValueChangeOutput = new EventEmitter<Result>();
  filteredCity!: Observable<Result[]>;
  constructor(private cityService:CityService) {}

  ngOnInit(): void {
    this.search = new FormControl();
   this.filteredCity =  this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val)
       })
    )
  }

  displayFn(city:Result): string {
    return city?city.matching_full_name : '';
  }

  optionSelected(){
    if(this.search.value){
      this.searchValueChangeOutput.emit(this.search.value)
      this.search.setValue(null);
    }

  }

  filter(val: string): Observable<Result[]> {
    if(!val){
      return of([]);
    }
    return this.cityService.getCities(val)
     .pipe(
       tap(response => {
        console.log(response);
        return response;
       }));
   }
}
