import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const forecastGuard: CanActivateFn = (route, state) => {
  if( route.queryParams && route.queryParams["lat"] && route.queryParams["lon"]){
    return true;
  }
  const router = inject(Router);
  router.navigate([""]);
  return false;
};
