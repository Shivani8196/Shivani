import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule} from '@auth0/angular-jwt' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrialComponent } from './trial/trial.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule, MatInputModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSpinner, MatGridList, MatGridTile } from '@angular/material' ;
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SellerModule } from './seller/seller.module';
import { BuyerModule } from './buyer/buyer.module';
@NgModule({ 
  declarations: [
    AppComponent,
    TrialComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MatSpinner,
    MatGridTile,
    MatGridList,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    SellerModule,
    BuyerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
   
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000', 'localhost:8080'],
        blacklistedRoutes:[]
        }
      })
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
