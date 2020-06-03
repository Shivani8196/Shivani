import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { StartShoppingComponent } from './start-shopping/start-shopping.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [BuyerDashboardComponent, CartComponent, StartShoppingComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BuyerModule { }
