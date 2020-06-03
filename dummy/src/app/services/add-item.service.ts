import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor(private  http :HttpClient) { }

  AddItem(item)
  {
    return this.http.post('http://localhost:3000/product',item)
  }
  Category()
  {
    return this.http.get('http://localhost:3000/product-category')
  }
}
