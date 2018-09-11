import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRevenueAccountRulesComponent } from './components/table-revenue-account-rules/table-revenue-account-rules.component';

const routes: Routes = [
  {
    path:"",
    component:TableRevenueAccountRulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueAccountRulesRoutingModule { }
