import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EditProductService} from './../../services/edit-product.service' ;
import { Router } from '@angular/router' ;
import { take} from 'rxjs/operators' ;


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  EditItemForm:FormGroup
  item;
  private path;

  constructor( private fb : FormBuilder , private Edit_Item : EditProductService ,private http : HttpClient, private route : ActivatedRoute , private router : Router) 

  {

    let id =this.route.snapshot.paramMap.get('id')
    if(id)
    {
      this.Edit_Item.EditProduct(id).pipe(take(1)).subscribe
      (res => {this.EditItemForm.patchValue(res);
      this.item=res})
    }
    this.EditItemForm =this.fb.group({
      salePrice:[null,[Validators.required,Validators.min(10)]],
      quantity:[null,[Validators.required,Validators.min(1)]],
      onSale:[false,Validators.required]
    });
    
   }
   
   AddItem(id)
   {   
      this.Edit_Item.UpdateDetails(this.EditItemForm.value,id).subscribe(
         res => console.log(res),
         err => console.log(err),
         
         )
         window.alert("Product is updated");
         this.router.navigate(["/seller/view-product"])
        

      }



  ngOnInit() {
  
  }
onCancel()
{
if(window.confirm("Are you sure you don't want to save changes?")) 
{
  this.router.navigate(["/seller/view-product"])
}


}

}
