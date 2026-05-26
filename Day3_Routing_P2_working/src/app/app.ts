import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';
import { Four } from './four/four';
import { TwoWay } from './two-way/two-way';
import { Five } from './five/five';
import { Calc } from './calc/calc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, First,Second,Third,Four,TwoWay,Five,Calc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HelloWorld');
}
