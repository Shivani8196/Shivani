import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {


  title = 'Welcome to Angular app';
  items = ['luxury','mandatory','conventional','new'];
  bestItem = true ;
  topics = ['Economy','Business','Philosphy','Technology','Psychology']
  topic = 'Technology' ;
  length = "" ;
  number = "test" ;

  constructor() {

    
   }

  ngOnInit() {
  }
  onClick()
  {
    this.length = 'Button is clicked' ; 
   }
}
