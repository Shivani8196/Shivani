import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  getCartData():Observable<any>{
    return this.http.get('http://localhost:3000/user-cart') ;

  }
  postCartData(User){
  return this.http.post('http://localhost:3000/user-cart',User) ;
}
}
