import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ForecastComponent } from './forecast/forecast.component';
import { forecastGuard } from './guard/forecast.guard';

const routes: Routes = [
  { path: '', component:CityComponent  },
  { path: 'Weather', component: ForecastComponent,  canActivate: [forecastGuard] },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
