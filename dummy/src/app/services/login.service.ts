import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap,pluck } from 'rxjs/operators';

interface Token
{
  access_token:string
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private readonly http: HttpClient , private readonly jwtService:JwtHelperService) { }
   LoginForm( username: string, password: string)
   {
     return this.http.post<Token>('http://localhost:3000/auth/login', {
      username,
      password}).pipe(pluck('access_token'), 
     tap(token => {
      localStorage.setItem('access_token', token);
      const decodedToken = this.jwtService.decodeToken();
      localStorage.setItem('access_role', decodedToken['role']);
    }));
     
   }
  }
