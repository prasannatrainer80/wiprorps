import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employ-model-form',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './employ-model-form.html',
  styleUrl: './employ-model-form.css',
})
export class EmployModelForm {

  isValidFormSubmitted: boolean = null;
  msg : string;
  onFormSubmit() {
    this.isValidFormSubmitted = false;

    if(this.employForm.invalid){
      alert(this.employForm.invalid)
      return;	
    } 	
    
    alert("Success");
    this.isValidFormSubmitted = true;	
    console.log(this.employForm.valid);
    this.msg = "Form Submitted Successfully...";
  }

  employForm = new FormGroup({
     empno: new FormControl('', Validators.required),
     name: new FormControl('', Validators.required),
     gender : new FormControl('',Validators.required),
     dept: new FormControl('', Validators.required),
     desig: new FormControl('', Validators.required),
     basic: new FormControl('', Validators.required),
  })
} 
