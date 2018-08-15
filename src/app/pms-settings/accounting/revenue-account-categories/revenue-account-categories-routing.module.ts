import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRevenueAccountCategoriesComponent } from './components/table-revenue-account-categories/table-revenue-account-categories.component';

const routes: Routes = [
  {
    path:'',
    component:TableRevenueAccountCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueAccountCategoriesRoutingModule { }
