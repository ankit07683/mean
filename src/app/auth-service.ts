import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURI = 'http://localhost:3000/api/';

  response ='';
  error= '';
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.apiURI+'register', user);
  }

  loginUser(user){
    return this.http.post<any>(this.apiURI+'login', user);
  }

  userProfile(){
    return this.http.get<any>(this.apiURI+'profile');
  }

  updateProfile(user){
    return this.http.post<any>(this.apiURI+'update_profile', user);
  }

  isLogin(){
    return !! localStorage.getItem('token');
  }

}
