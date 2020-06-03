import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  items: any = [];
  constructor(private http : HttpClient) { }
  private totalproducts: number=0;
  private itemOnSale: number=0;


  ngOnInit() {

    this.total();
  }

totalcount(){
  return this.http.get("http://localhost:3000/product/user");
}

total(){
 
  this.totalcount().subscribe((response)=>{
      this.items=response as object [];
     
      for(let item of this.items){
       if(item.onSale){
        this.itemOnSale=this.itemOnSale+1;
       }
         
         this.totalproducts=this.totalproducts+1;
      }
      console.log(this.itemOnSale);
      console.log(this.totalproducts);
    })

}
}
