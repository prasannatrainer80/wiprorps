import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-info',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.css',
})
export class CustomerInfo {
  cid : number;
  customer : Observable<Customer>;

  constructor(private _customerService : CustomerService) {
    this.cid = parseInt(localStorage.getItem("cid"));
    this.customer = this._customerService.searchByCustomerId(this.cid);
   
  }
}
