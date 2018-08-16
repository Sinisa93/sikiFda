import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountLabelsRoutingModule } from './revenue-account-labels-routing.module';
import { TableRevenueAccountLabelsComponent } from './components/table-revenue-account-labels/table-revenue-account-labels.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormRevenueAccountLabelsComponent } from './components/form-revenue-account-labels/form-revenue-account-labels.component';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountLabelsRoutingModule,
    SharedModule
  ],
  declarations: [TableRevenueAccountLabelsComponent, FormRevenueAccountLabelsComponent],
  entryComponents:[FormRevenueAccountLabelsComponent]
})
export class RevenueAccountLabelsModule { }
