import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login_api="http://localhost:3000/auth/login" ;
  error: HttpErrorResponse;
  constructor(private fb : FormBuilder, private login_service : LoginService,private readonly jwtService: JwtHelperService, private router : Router)
  {
     
  }

  
    loginForm= this.fb.group(
   {
     username: ['',[Validators.required, Validators.email] ],
     password : ['', [ Validators.required, Validators.minLength(6)]]

   }
 ) ;
 
  loginService()
  {
    //console.log(this.loginForm.value);

    if (!this.loginForm.valid) {
      return;
    }
     this.login_service.LoginForm(this.loginForm.get('username').value,
     this.loginForm.get('password').value).pipe().subscribe(
     
       (token) => {
         const tokenval = this.jwtService.decodeToken(token);
         console.log(tokenval['role']);
         if (tokenval['role'] === 'admin') {
           
          this.router.navigate(["/seller"]) 
         } 

         else 
         {
          this.router.navigate(["/buyer"]) 
         }
       }, (err) => this.error = err);

 

}
ngOnInit() {
}
email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
