import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private url = "https://jsonplaceholder.typicode.com/users"
  constructor(private _http : HttpClient) {

  }

  getUser(id : number) : Observable<User> {
    return this._http.get<User>(this.url+"/"+id)
  }
  getUsers() : Observable<User[]> {
    return this._http.get<User[]>(this.url);
  }
}
