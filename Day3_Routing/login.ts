import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userName : string;
  passCode : string;
  error : string;
  constructor(private _router : Router) {}

  login() {
    if (this.userName=="Infinite" && this.passCode=="Infinite") {
       this._router.navigate(["/menu"]);
    } else {
      // alert("Invalid Credentials...");
      this.error = "Invalid Credentials...";
    }
  }
  
}
