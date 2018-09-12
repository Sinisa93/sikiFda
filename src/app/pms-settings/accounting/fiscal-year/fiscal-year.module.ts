import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiscalYearRoutingModule } from './fiscal-year-routing.module';
import { FormFiscalYearComponent } from './components/form-fiscal-year/form-fiscal-year.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FiscalYearRoutingModule,
    SharedModule
  ],
  declarations: [FormFiscalYearComponent]
})
export class FiscalYearModule { }
