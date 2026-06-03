import { Component } from '@angular/core';
import { EmployShow } from '../employ-show/employ-show';
import { EmploySearch } from '../employ-search/employ-search';
import { EmployAdd } from '../employ-add/employ-add';
import { EmployUpdate } from '../employ-update/employ-update';
import { EmployDelete } from '../employ-delete/employ-delete';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [EmployShow,EmploySearch,EmployAdd,
    EmployUpdate,EmployDelete,RouterModule,RouterOutlet
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
