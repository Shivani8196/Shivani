import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewProductsInterface } from './../Files/viewproducts' ;


@Injectable({
  providedIn: 'root'
})
export class ViewProductListService {

  constructor(private http : HttpClient) { }


  view_products_list () 
  {
    return this.http.get("http://localhost:3000/product/user");
  }
}
