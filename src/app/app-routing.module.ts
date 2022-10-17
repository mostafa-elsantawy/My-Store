import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductItemDetailComponent},
  {path:'cart', component:CartComponent},
  {path: 'confirmation' , component:ConfirmationComponent},
  {path: 'Unit' , loadChildren: () => import ("./views/units/units.module") . then((m) => m.UnitsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
