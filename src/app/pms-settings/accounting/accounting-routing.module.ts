import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'revenue-account-labels',
    loadChildren: './revenue-account-labels/revenue-account-labels.module#RevenueAccountLabelsModule'
  },
  {
    path: 'revenue-account-categories',
    loadChildren: './revenue-account-categories/revenue-account-categories.module#RevenueAccountCategoriesModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
