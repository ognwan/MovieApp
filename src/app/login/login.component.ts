import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message: string = '';
  public username: string = '';
  public password: string = '';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.message = this.loginService.login(this.username, this.password);
  }
}
