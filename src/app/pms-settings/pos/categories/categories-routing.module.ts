import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePosCategoriesComponent } from './components/table-pos-categories/table-pos-categories.component';

const routes: Routes = [
  {
    path:'',
    component:TablePosCategoriesComponent
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
export class CategoriesRoutingModule { }
