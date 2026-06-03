import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from './employ';

@Injectable({
  providedIn: 'root',
})
export class EmployService {
   constructor(private _http : HttpClient) {

  }

  deleteEmploy(empno : number) : Observable<any> {
    return this._http.delete("http://localhost:1111/deleteemploy/"+empno)
  }

  updateEmploy(employ : Employ) : Observable<any> {
    return this._http.put("http://localhost:1111/updateemploy",employ)
  }

  addEmploy(employ : Employ) : Observable<any> {
    return this._http.post("http://localhost:1111/addemploy",employ)
  }

  searchEmploy(eno : number) : Observable<Employ> {
    return this._http.get<Employ>("http://localhost:1111/searchemploy/" +eno);
  }

  showEmploy() : Observable<Employ[]> {
    return this._http.get<Employ[]>("http://localhost:1111/showemploy")
  }

}
