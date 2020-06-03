import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellerDashboardComponent} from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent} from './seller/view-product/view-product.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { StartShoppingComponent } from './buyer/start-shopping/start-shopping.component';
import { CartComponent } from './buyer/cart/cart.component';
import { EditProductComponent } from './seller/edit-product/edit-product.component';
import { ProductDetailComponent } from './buyer/product-detail/product-detail.component';

const routes: Routes = [

  { path : 'home', component : HomeComponent },
  
  { path : 'login-page', component: LoginComponent },
  { path : 'seller', component : SellerDashboardComponent },
  { path : 'signup-page', component: SignupComponent },
  { path :  'buyer' , component : BuyerDashboardComponent},
  { path: 'seller/view-product', component: ViewProductComponent },
  { path: 'seller/add-product', component: AddProductComponent },
  { path: 'buyer/start-shopping', component : StartShoppingComponent },
  { path : 'buyer/cart' , component : CartComponent},
  { path : 'seller/view-product/edit-product/:id', component : EditProductComponent},
  { path : 'buyer/product-detail', component : ProductDetailComponent},
  { path : ' ', redirectTo: '/home', pathMatch: 'full'  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

