import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { EmployForm } from './employ-form/employ-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginForm,EmployForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormsExample');
}
