import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employ-form.html',
  styleUrl: './employ-form.css',
})
export class EmployForm {
  employ : Employ;
  isValid : boolean;
  msg : string;

  constructor() {
    this.employ = new Employ();
    this.isValid = false;
  }

  addEmploy(loginForm : NgForm) {
    if (loginForm.invalid) {
      return;
    }
    this.isValid = true;
    this.msg = "Form Submitted Successfully...";
  }
}
