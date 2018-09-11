import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pos-points',
    loadChildren: './pos-points/pos-points.module#PosPointsModule'
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule'
  },
  {
    path: 'products',
    loadChildren:'./products/products.module#ProductsModule',
    
  },
  {
    path: 'add-ons',
    loadChildren:'./add-ons/add-ons.module#AddOnsModule',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
