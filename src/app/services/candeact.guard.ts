import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(
    component: SearchComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      console.log(component.textBoxValue.length)
      if(component.textBoxValue.length <= 0){
        return window.confirm("Are you sure?");
      }
      else
        return true;
  }
  
}
