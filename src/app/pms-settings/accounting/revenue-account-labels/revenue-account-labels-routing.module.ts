import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRevenueAccountLabelsComponent } from './components/table-revenue-account-labels/table-revenue-account-labels.component';

const routes: Routes = [
  {
    path:'',
    component:TableRevenueAccountLabelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueAccountLabelsRoutingModule { }
