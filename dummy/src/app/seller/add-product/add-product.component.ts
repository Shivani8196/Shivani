import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { AddItemService} from './../../services/add-item.service';
import { Router } from '@angular/router';

interface ICategory
{
  _id:string,
  name:string,
  user:string,
  _v:number
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   AddItemForm:FormGroup
   public catList:AddItemService[];
   public categoryList:ICategory[];
  constructor( private fb : FormBuilder,private Add_Item:AddItemService, private router : Router) {
    this.AddItemDetails();
   }
   AddItemDetails()
   {
     this.AddItemForm =this.fb.group({
       name:['',Validators.required],
      
       category:['',Validators.required],
       description:['',Validators.required],
       mrp:[null,[Validators.required,Validators.min(10)]],
       salePrice:[null,[Validators.required,Validators.min(10)]],
       quantity:[null,[Validators.required,Validators.min(1)]],
       onSale:[false,Validators.required]
     })
   }
   AddItem()
   {
    if (!this.AddItemForm.valid) {
     window.alert("item not added");
    }
    this.Add_Item.AddItem(this.AddItemForm.value) .subscribe(
      res => console.log(res),
      err => console.log(err),
    
    )
      console.log(this.AddItemForm.value);
      window.alert("Item has been added") ;
      this.router.navigate(["/seller"]); 
   }
  ngOnInit() {
    const cat =this.Add_Item.Category();
    cat.subscribe((catList:ICategory[])=>
    {
        this.categoryList=catList;
        console.log(catList);
    })
  }

}
