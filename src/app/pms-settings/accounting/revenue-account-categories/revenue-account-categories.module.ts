import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountCategoriesRoutingModule } from './revenue-account-categories-routing.module';
import { TableRevenueAccountCategoriesComponent } from './components/table-revenue-account-categories/table-revenue-account-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountCategoriesRoutingModule
  ],
  declarations: [TableRevenueAccountCategoriesComponent]
})
export class RevenueAccountCategoriesModule { }
