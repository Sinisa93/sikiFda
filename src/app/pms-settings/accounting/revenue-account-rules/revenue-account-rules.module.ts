import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueAccountRulesRoutingModule } from './revenue-account-rules-routing.module';
import { TableRevenueAccountRulesComponent } from './components/table-revenue-account-rules/table-revenue-account-rules.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RevenueAccountRulesRoutingModule,
    SharedModule
  ],
  declarations: [TableRevenueAccountRulesComponent]
})
export class RevenueAccountRulesModule { }
