import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {

  firstNo : number;
  secondNo : number;
  result : number;

  sum() : any {
    this.result = this.firstNo + this.secondNo;
  }

  sub() : any {
    this.result = this.firstNo - this.secondNo;
  }

  mult() : any {
    this.result = this.firstNo * this.secondNo;
  }
}
