import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  
  constructor(private _httpClient : HttpClient) {}
  showMenu() : Observable<Menu[]> {
    return this._httpClient.get<Menu[]>("http://localhost:8899/showMenu");
  }
}
