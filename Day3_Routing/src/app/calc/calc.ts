import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule, CommonModule],
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {
  
  firstNo: number;
  secondNo: number;
  result : number;

  sum()  {
    this.result = this.firstNo + this.secondNo;
  }

  sub() {
    this.result = this.firstNo - this.secondNo
  }

  mult() {
    this.result = this.firstNo * this.secondNo
  }
}
