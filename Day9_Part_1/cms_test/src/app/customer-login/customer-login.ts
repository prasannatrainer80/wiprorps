import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-customer-login',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './customer-login.html',
  styleUrl: './customer-login.css',
})
export class CustomerLogin {
 customer : Customer;
  isValid : boolean;
  customerFound : Customer;
  constructor(private _customerService : CustomerService, 
    private _router : Router
  ) {
    this.customer = new Customer();
    this.isValid = false;
  }

  login(loginForm : NgForm) {
    if (loginForm.invalid) {
      return;
    }
    this.isValid = true;
    this._customerService.validateCustomer(this.customer.cusUsername,this.customer.cusPassword)
    .subscribe(x => {
      if (x=='1') {
        this._customerService.searchByUserName(this.customer.cusUsername).subscribe(x => {
          this.customerFound = x;
          localStorage.setItem("cid",this.customerFound.cusId.toString());
          // alert("Customer Id  is  " +localStorage.getItem("cid"));
        })
        this._router.navigate(["customerDashBoard"])
      } else {
        alert("Invalid Credentials...");
      }
    })
  }

}
