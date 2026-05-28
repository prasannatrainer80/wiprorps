import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-show',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-show.html',
  styleUrl: './user-show.css',
})
export class UserShow {
  users : Observable<User[]>

  constructor(private _userService : UserService) {
    this.users = this._userService.getUsers();
  }
}
