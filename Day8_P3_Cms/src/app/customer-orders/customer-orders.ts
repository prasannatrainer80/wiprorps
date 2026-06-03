import { Component } from '@angular/core';
import { CustomerService } from '../customer-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Orders } from '../orders';

@Component({
  selector: 'app-customer-orders',
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-orders.html',
  styleUrl: './customer-orders.css',
})
export class CustomerOrders {
  cid :number;
  orders : Observable<Orders[]>
  constructor(private _customerService : CustomerService) {
    this.cid = parseInt(localStorage.getItem("cid"));
    this.orders = this._customerService.showCustomerOrder(this.cid);
    
  }
}
