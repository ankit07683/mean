import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {"name":'', "email":'', "password":''};
  errorMessage = '';
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
        
  }

  proceed_registration() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(data => this.successHandler(data),
                error => this.errorHandler(error)
                )
  }

  errorHandler(error){
    console.log(error)
    this.errorMessage = error.error.text;
  }

  successHandler(data){    
    localStorage.setItem('token', data.token);
    this.router.navigate(['/premium-events']);
  }

}
