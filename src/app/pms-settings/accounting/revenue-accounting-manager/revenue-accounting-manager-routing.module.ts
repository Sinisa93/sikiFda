import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRevenueAccountingManagerComponent } from './components/table-revenue-accounting-manager/table-revenue-accounting-manager.component';

const routes: Routes = [
  {
    path:"",
    component:TableRevenueAccountingManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueAccountingManagerRoutingModule { }
