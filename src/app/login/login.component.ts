import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {"email":'', "password":''}
  errorMessage = '';
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
        
  }

  proceed_login() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(data => this.successHandler(data),
                error => this.errorHandler(error)
                )
  }

  errorHandler(error){
    this.errorMessage = error.error;
  }

  successHandler(data){    
    localStorage.setItem('token', data.token);
    this.router.navigate(['/premium-events']);
  }

}
