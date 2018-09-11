import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardPurgeRoutingModule } from './credit-card-purge-routing.module';
import { FormCreditCardPurgeComponent } from './components/form-credit-card-purge/form-credit-card-purge.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CreditCardPurgeRoutingModule,
    SharedModule
  ],
  declarations: [FormCreditCardPurgeComponent]
})
export class CreditCardPurgeModule { }
