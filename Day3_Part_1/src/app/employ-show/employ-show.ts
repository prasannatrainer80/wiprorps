import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-show',
  imports: [FormsModule,CommonModule],
  templateUrl: './employ-show.html',
  styleUrl: './employ-show.css',
})
export class EmployShow {
  employs = [
    new Employ(1,"Ashay","Java","Programmer",84234),
    new Employ(2,"Sakshi","Angular","Developer",99999),
    new Employ(3,"Sunil","React","Manager",91144),
    new Employ(4,"Vijay","Java","TL",92344),
    new Employ(5,"Varsha","Testing","Expert",88881),
    
  ]
}
