import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePosProductsComponent } from './components/table-pos-products/table-pos-products.component';

const routes: Routes = [
  {
    path:'',
    component:TablePosProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
