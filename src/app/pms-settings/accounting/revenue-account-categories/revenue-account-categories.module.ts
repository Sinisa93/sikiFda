import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountCategoriesRoutingModule } from './revenue-account-categories-routing.module';
import { TableRevenueAccountCategoriesComponent } from './components/table-revenue-account-categories/table-revenue-account-categories.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormRevenueAccountCategoriesComponent } from './components/form-revenue-account-categories/form-revenue-account-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountCategoriesRoutingModule,
    SharedModule
  ],
  declarations: [TableRevenueAccountCategoriesComponent, FormRevenueAccountCategoriesComponent],
  entryComponents: [FormRevenueAccountCategoriesComponent]
})
export class RevenueAccountCategoriesModule { }
