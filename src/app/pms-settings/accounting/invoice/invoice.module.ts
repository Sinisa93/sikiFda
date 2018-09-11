import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormInvoiceComponent } from './components/form-invoice/form-invoice.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule
  ],
  declarations: [FormInvoiceComponent]
})
export class InvoiceModule { }
