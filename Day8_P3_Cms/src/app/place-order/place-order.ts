import { Component } from '@angular/core';
import { Orders } from '../orders';
import { CommonModule} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { VendorService } from '../vendor-service';
import { CustomerService } from '../customer-service';
import { MenuService } from '../menu-service';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { Vendor } from '../vendor';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-place-order',
  imports: [CommonModule,FormsModule],
  templateUrl: './place-order.html',
  styleUrl: './place-order.css',
})
export class PlaceOrder {
   orders : Orders;
   menus : Observable<Menu[]>;
   vendors : Observable<Vendor[]>;
   wallets : Observable<Wallet[]>;

   constructor(private _vendorService : VendorService,
    private _customerService : CustomerService,
    private _menuService : MenuService,
    
   ) {
    this.orders = new Orders();
    this.orders.cusId = parseInt(localStorage.getItem("cid"));
    this.menus = this._menuService.showMenu();
    this.vendors = this._vendorService.showVendor();
    this.wallets = this._customerService.showCustomerWallet(this.orders.cusId);

   }

   placeOrder(orderForm : NgForm) {
     if (orderForm.invalid) {
      return;
     }
     this._customerService.placeOrder(this.orders).subscribe(x => {
      alert(x);
     })
   }
}
