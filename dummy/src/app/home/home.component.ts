import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from './../Files/products';
import { ProductsService} from './../services/products.service' ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item : ProductsInterface[] ;

  constructor(private prodService : ProductsService) { }

  ngOnInit() {
    this.prodService.getProductsInterface().subscribe(data => this.item = data) ;


    
  }

}
