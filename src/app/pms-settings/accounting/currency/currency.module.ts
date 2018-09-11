import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    SharedModule
  ],
  declarations: [FormCurrencyComponent]
})
export class CurrencyModule { }
