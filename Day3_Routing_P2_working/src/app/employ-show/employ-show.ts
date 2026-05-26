import { Component } from '@angular/core';
import { Employ } from '../employ';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employ-show',
  imports: [FormsModule,NgFor],
  templateUrl: './employ-show.html',
  styleUrl: './employ-show.css',
})
export class EmployShow {
 
  employs = [
    new Employ(1,"Deva","Java","Programmer",88323),
    new Employ(2,"Aashik","Angular","Programmer",99323),
    new Employ(3,"Naveen","Java","Developer",91144),
    new Employ(4,"Balu","React","Manager",90032),
    new Employ(5,"Bavya","Sql","Expert",98822),
    new Employ(6,"Noorey","Angular","Tester",88321),
    

  ]

}
