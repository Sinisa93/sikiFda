import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOnsRoutingModule } from './add-ons-routing.module';
import { FormAddOnsComponent } from './components/form-add-ons/form-add-ons.component';
import { TableAddOnsComponent } from './components/table-add-ons/table-add-ons.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AddOnsRoutingModule,
    SharedModule
  ],
  declarations: [FormAddOnsComponent, TableAddOnsComponent],
  entryComponents:[FormAddOnsComponent]
})
export class AddOnsModule { }
