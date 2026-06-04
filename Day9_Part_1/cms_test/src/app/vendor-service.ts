import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private _httpClient : HttpClient) {

  }

  showVendor() : Observable<Vendor[]> {
    return this._httpClient.get<Vendor[]>("http://localhost:8899/showVendor");
  }
}
