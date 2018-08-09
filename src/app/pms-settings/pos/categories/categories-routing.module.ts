import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePosCategoriesComponent } from './components/table-pos-categories/table-pos-categories.component';

const routes: Routes = [
  {
    path:'',
    component:TablePosCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
