import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  uname : string;
  pwd : string;

  constructor(private _loginService : LoginService,
    private _router : Router
  ) {

  }

  login() {
    this._loginService.login(this.uname,this.pwd).subscribe(x =>{
      // alert(x);
      if (x=="1") {
          this._router.navigate(["/menu"]);
      } else {
        alert("Invalid Credentials...");
      }
    })
  }

}
