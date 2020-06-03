import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService} from './../services/signup.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private fb : FormBuilder, private signupservice : SignupService  , private router :Router) { }
  signupForm = this.fb.group (
    {
      displayName : ['', 
        Validators.required
      ],
      userName: ['',
          [Validators.required,
          Validators.email
          ]
    ],
      password: ['',
          [Validators.required, Validators.minLength(6) ]],

      role : ['', Validators.required]    
    }
  )
  ngOnInit() {
  }

  submitForm()
  {
    //console.log(this.signupForm.value);

    this.signupservice.getSignupInfo(this.signupForm.value).subscribe(
      res => console.log(res),
      err => console.log(err),
    
    )
    alert("Registered Successfully!!")
    this.router.navigate(['/login-page']);
    
    } 
    
  

  
}
