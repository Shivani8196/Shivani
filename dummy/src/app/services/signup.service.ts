import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from './../Files/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signup_api = "http://localhost:3000/user ";

  constructor(private http: HttpClient)
   { }

   getSignupInfo(user : SignUp)
    {
     return this.http.post(this.signup_api, user) ;
   }
}
