import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userData = {"name":'', "email":''};
  errorMessage = '';
  constructor(private _auth: AuthService, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this._auth.userProfile()
      .subscribe(data => this.userData = data,
              error => this.errorHandler(error)
              )
  }

  update_profile() {
    this._auth.updateProfile(this.userData)
      .subscribe(data => this.successHandler(data),
                error => this.errorHandler(error)
                )
  }

  errorHandler(error){
    this.errorMessage = error.error;
  }

  successHandler(data){
    this.errorMessage ="Updated Successfully"     
  }

}
