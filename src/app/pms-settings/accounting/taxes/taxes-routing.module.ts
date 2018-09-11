import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTaxesComponent } from './components/table-taxes/table-taxes.component';

const routes: Routes = [
  {
    path:'',
    component:TableTaxesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesRoutingModule { }
