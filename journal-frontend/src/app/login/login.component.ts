import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string='';
  constructor(private http: HttpClient) {}

  login() {
    const userData = { email: this.email, password: this.password };

    this.http.post('http://localhost:3000/user/login', userData)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
        },
        (error) => {
          console.error('Login error', error);
        }
      );
  }
}
