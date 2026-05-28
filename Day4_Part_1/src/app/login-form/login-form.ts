import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  
  user : string;
  pwd : string;
  isValid : boolean;

  constructor() {
    this.isValid = false;
  }

  login(loginForm : NgForm) {
    if (loginForm.invalid) {
      return;
    }
    this.isValid = true;
    alert("Forms Validation Completed...");
  }
}
