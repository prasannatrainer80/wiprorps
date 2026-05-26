import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css',
})
export class TwoWay {
  message : string;
}
