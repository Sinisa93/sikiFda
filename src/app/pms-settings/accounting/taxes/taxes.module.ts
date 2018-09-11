import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { TableTaxesComponent } from './components/table-taxes/table-taxes.component';
import { FormTaxesComponent } from './components/form-taxes/form-taxes.component';

@NgModule({
  imports: [
    CommonModule,
    TaxesRoutingModule,
    SharedModule
  ],
  declarations: [TableTaxesComponent, FormTaxesComponent],
  entryComponents: [FormTaxesComponent]
})
export class TaxesModule { }
