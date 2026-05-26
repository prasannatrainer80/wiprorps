import { Component } from '@angular/core';

@Component({
  selector: 'app-five',
  imports: [],
  templateUrl: './five.html',
  styleUrl: './five.css',
})
export class Five {
  message : string;

  noorey() : any {
    this.message = "Hi I am Noorey...";
  }

  naveen() : any {
    this.message = "Hi I am Naveen...";
  }

  bawin() : any {
    this.message = "Hi I am Bawin...";
  }
}
