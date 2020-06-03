import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from './../Files/products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient)
  
  { }
   getProductsInterface(): Observable<ProductsInterface[]>
  {
    return this.http.get<ProductsInterface[]>("http://localhost:3000/product/all");
  }
}
