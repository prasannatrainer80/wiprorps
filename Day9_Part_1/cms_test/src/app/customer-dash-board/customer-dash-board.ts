import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-customer-dash-board',
  imports: [CommonModule,RouterModule,FormsModule,RouterOutlet],
  templateUrl: './customer-dash-board.html',
  styleUrl: './customer-dash-board.css',
})
export class CustomerDashBoard {

}
