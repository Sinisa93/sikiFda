import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardTypesRoutingModule } from './credit-card-types-routing.module';
import { TableCreditCardTypesComponent } from './components/table-credit-card-types/table-credit-card-types.component';
import { FormCreditCardTypesComponent } from './components/form-credit-card-types/form-credit-card-types.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CreditCardTypesRoutingModule,
    SharedModule
  ],
  declarations: [TableCreditCardTypesComponent, FormCreditCardTypesComponent],
  entryComponents:[FormCreditCardTypesComponent]
})
export class CreditCardTypesModule { }
