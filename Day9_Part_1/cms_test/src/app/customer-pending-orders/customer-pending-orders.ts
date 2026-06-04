import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-customer-pending-orders',
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-pending-orders.html',
  styleUrl: './customer-pending-orders.css',
})
export class CustomerPendingOrders {

  cid :number;
    orders : Observable<Orders[]>
    constructor(private _customerService : CustomerService) {
      this.cid = parseInt(localStorage.getItem("cid"));
      this.orders = this._customerService.showCustomerPendingOrder(this.cid);
      
    }
}
