import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-delete',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-delete.html',
  styleUrl: './employ-delete.css',
})
export class EmployDelete {
  deleteEmploy() {
    this._employService.deleteEmploy(this.empno).subscribe(x => {
      alert(x);
    })
  }
  empno : number;
  constructor(private _employService : EmployService) {}

}
