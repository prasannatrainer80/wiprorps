import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-case-example',
  imports: [FormsModule, NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './case-example.html',
  styleUrl: './case-example.css',
})
export class CaseExample {
  choice : number;
}
