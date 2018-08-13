import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePosPointsComponent } from './components/table-pos-points/table-pos-points.component';

const routes: Routes = [
  {
    path:'',
    component:TablePosPointsComponent
  },
  {
    path:'categories',
    loadChildren:'../categories/categories.module#CategoriesModule',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren:'../products/products.module#ProductsModule',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosPointsRoutingModule { }
