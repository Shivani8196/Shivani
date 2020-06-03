import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { ProductsInterface} from './../Files/products';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  latestArticle:ProductsInterface={
    name:"",
    mrp:0,
    salePrice:0,
    onSale:false,
    description:"",
    _id: ""
  };
    private inventorySubject$=new BehaviorSubject<ProductsInterface>(this.latestArticle);
    inventoryChange$=this.inventorySubject$.asObservable();
    addToInventory(maininterface:ProductsInterface){
      this.latestArticle=maininterface;
      this.inventorySubject$.next(maininterface);
    }
}
