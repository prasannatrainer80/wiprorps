import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserShow } from './user-show/user-show';
import { UserSearch } from './user-search/user-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserShow,UserSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ServiceExample');
}
