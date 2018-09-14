import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentReasonListsRoutingModule } from './adjustment-reason-lists-routing.module';
import { TableAdjustmentReasonListsComponent } from './components/table-adjustment-reason-lists/table-adjustment-reason-lists.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormAdjustmentReasonListsComponent } from './components/form-adjustment-reason-lists/form-adjustment-reason-lists.component';

@NgModule({
  imports: [
    CommonModule,
    AdjustmentReasonListsRoutingModule,
    SharedModule
  ],
  declarations: [TableAdjustmentReasonListsComponent, FormAdjustmentReasonListsComponent],
  entryComponents:[FormAdjustmentReasonListsComponent]
})
export class AdjustmentReasonListsModule { }
