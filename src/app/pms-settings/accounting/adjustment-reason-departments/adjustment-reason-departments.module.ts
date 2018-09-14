import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentReasonDepartmentsRoutingModule } from './adjustment-reason-departments-routing.module';
import { FormAdjustmentReasonDepartmentsComponent } from './components/form-adjustment-reason-departments/form-adjustment-reason-departments.component';
import { TableAdjustmentReasonDepartmentsComponent } from './components/table-adjustment-reason-departments/table-adjustment-reason-departments.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdjustmentReasonDepartmentsRoutingModule,
    SharedModule
  ],
  declarations: [FormAdjustmentReasonDepartmentsComponent, TableAdjustmentReasonDepartmentsComponent],
  entryComponents:[FormAdjustmentReasonDepartmentsComponent]
})
export class AdjustmentReasonDepartmentsModule { }
