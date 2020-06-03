import { Component, OnInit } from '@angular/core';
import { ViewProductListService } from './../../services/view-product-list.service' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewProductsInterface} from './../../Files/viewproducts';
import {Observable, from } from 'rxjs' ;
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public viewlist:ViewProductListService[]
  public viewproductlist:ViewProductsInterface[] ;

 public post: any[];
  productid: Array<String> = [];
  component: ViewProductsInterface[]; 
  _id:string
  constructor(private productlist : ViewProductListService, private http : HttpClient, private router : Router) { 

  }

  ngOnInit() {

    this.viewdetails()
    this.productid

  }

  viewdetails()
  {


    const view= this.productlist.view_products_list();
    view.subscribe((viewlist:ViewProductsInterface[])=>
    {
      this.viewproductlist=viewlist;
      console.log(viewlist);
      
    })

  }
  onDelete(_id )
  {
   console.log(_id);
   this.productid.push(_id);
   console.log(this.productid) ;
   const options = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    }),
    body: this.productid
  }

  if (window.confirm('Are you sure, you want to delete?')) {
    console.log(_id)
    this.http.delete('http://localhost:3000/product', options).subscribe(()=>{
    this.viewdetails();
  })
  }

  }
 onEdit(employeeId : number)
 {
 this.router.navigate(['/seller/view-product/edit-product', employeeId])
 }




}
