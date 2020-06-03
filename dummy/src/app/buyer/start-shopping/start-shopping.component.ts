import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from './../../Files/products';
import { ProductsService} from './../../services/products.service' ;
import { Router} from '@angular/router' ;
import {SubjectService} from './../../services/subject.service';



@Component({
  selector: 'app-start-shopping',
  templateUrl: './start-shopping.component.html',
  styleUrls: ['./start-shopping.component.css']
})
export class StartShoppingComponent implements OnInit {
  item : ProductsInterface[] ;


  constructor(private prodService : ProductsService, public router : Router, private subjectService:SubjectService) { }

  ngOnInit() {

    this.prodService.getProductsInterface().subscribe(data => this.item = data) ;


  }
  addTo(i)
  {
    this.subjectService.addToInventory(i);
  }

}
