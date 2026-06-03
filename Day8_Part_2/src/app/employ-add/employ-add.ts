import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employ } from '../employ';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-add',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-add.html',
  styleUrl: './employ-add.css',
})
export class EmployAdd {
  employ  : Employ;

  constructor(private _employService : EmployService) {
    this.employ = new Employ();
  }

  addEmploy() {
    this._employService.addEmploy(this.employ).subscribe(x =>{
      alert(x);
    })
  }

}
