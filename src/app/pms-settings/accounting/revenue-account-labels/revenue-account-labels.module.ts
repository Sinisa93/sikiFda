import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountLabelsRoutingModule } from './revenue-account-labels-routing.module';
import { TableRevenueAccountLabelsComponent } from './components/table-revenue-account-labels/table-revenue-account-labels.component';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountLabelsRoutingModule
  ],
  declarations: [TableRevenueAccountLabelsComponent]
})
export class RevenueAccountLabelsModule { }
