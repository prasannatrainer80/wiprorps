import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../wallet';
import { CustomerService } from '../customer-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-customer-wallet',
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-wallet.html',
  styleUrl: './customer-wallet.css',
})
export class CustomerWallet {

  cid : number;
  wallets : Observable<Wallet[]> 

  constructor(private _customerService : CustomerService) {
    this.cid = parseInt(localStorage.getItem("cid"));
    this.wallets = this._customerService.showCustomerWallet(this.cid);

  }
}
