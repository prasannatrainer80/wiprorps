import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employ } from '../employ';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-update',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-update.html',
  styleUrl: './employ-update.css',
})
export class EmployUpdate {
  employ  : Employ;
  
    constructor(private _employService : EmployService) {
      this.employ = new Employ();
    }
  
    updateEmploy() {
      this._employService.updateEmploy(this.employ).subscribe(x =>{
        alert(x);
      })
    }

}
