import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCreditCardTypesComponent } from './components/table-credit-card-types/table-credit-card-types.component';

const routes: Routes = [
  {
    path:'',
    component:TableCreditCardTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardTypesRoutingModule { }
