import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  public userNameName: string;
  public password: string;
  public errorMsg: string;
  constructor(public router: Router, public loginservice: LoginService) {}

  login(loginForm: NgForm) {
    if (this.loginservice.isValidLogin(loginForm.value.password)) {
      localStorage.setItem('currentUser', JSON.stringify(loginForm.value));
      this.router.navigate(['home']);
    } else {
      this.errorMsg = 'Password is incorrect. Please enter 123456 as password';
    }
  }
}
