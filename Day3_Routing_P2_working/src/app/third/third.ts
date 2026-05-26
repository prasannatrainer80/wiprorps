import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  imports: [],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
  topic : string;
  company : string;
  trainer : string;

  constructor() {
    this.topic = "Angular 18";
    this.company = "Infinite";
    this.trainer = "Prasanna Pappu"
  }
}
