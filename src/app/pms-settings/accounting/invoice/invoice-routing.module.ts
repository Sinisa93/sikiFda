import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInvoiceComponent } from './components/form-invoice/form-invoice.component';

const routes: Routes = [
  {
    path:"",
    component:FormInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
