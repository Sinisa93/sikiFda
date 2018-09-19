import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountingManagerRoutingModule } from './revenue-accounting-manager-routing.module';
import { TableRevenueAccountingManagerComponent } from './components/table-revenue-accounting-manager/table-revenue-accounting-manager.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountingManagerRoutingModule,
    SharedModule
  ],
  declarations: [TableRevenueAccountingManagerComponent]
})
export class RevenueAccountingManagerModule { }
