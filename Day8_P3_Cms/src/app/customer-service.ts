import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Wallet } from './wallet';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private _httpClient : HttpClient) { }

  validateCustomer(user : string, pwd : string) : Observable<any> {
    return this._httpClient.get("http://localhost:8899/customerLogin/"+user+"/"+pwd);
  }

  placeOrder(orders : Orders) : Observable<any> {
    return this._httpClient.post("http://localhost:8899/placeOrder",orders);
  }
  showCustomerPendingOrder(custId : number) : Observable<Orders[]> {
    return this._httpClient.get<Orders[]>("http://localhost:8899/showCustomerPendingOrder/"+custId);
  }

  showCustomerOrder(custId : number) : Observable<Orders[]> {
    return this._httpClient.get<Orders[]>("http://localhost:8899/showCustomerOrder/"+custId);
  }

  showCustomerWallet(custId : number) : Observable<Wallet[]> {
    return this._httpClient.get<Wallet[]>("http://localhost:8899/showCustomerWallets/"+custId)
  }
  searchByCustomerId(custId : number) : Observable<Customer> {
    return this._httpClient.get<Customer>("http://localhost:8899/searchcustomer/"+custId);
  }

  searchByUserName(user : string) : Observable<any> {
    return this._httpClient.get("http://localhost:8899/searchByCustomerUserName/"+user);
  }

}
