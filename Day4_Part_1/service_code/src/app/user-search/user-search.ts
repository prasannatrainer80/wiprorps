import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',
})
export class UserSearch {
  id : number;
  userFound : Observable<User>
  constructor(private _userService : UserService) {

  }

  show() {
    this.userFound = this._userService.getUser(this.id);
  }
}
