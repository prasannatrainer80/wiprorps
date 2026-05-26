import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';
import { TwoWay } from './two-way/two-way';
import { EventDemo } from './event-demo/event-demo';
import { Calc } from './calc/calc';
import { CaseExample } from './case-example/case-example';
import { EmployShow } from './employ-show/employ-show';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,Second,Third,TwoWay,
    Calc,CaseExample,EmployShow,
    EventDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HelloWorld');
}
