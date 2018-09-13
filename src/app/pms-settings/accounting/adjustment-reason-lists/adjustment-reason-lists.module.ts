import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentReasonListsRoutingModule } from './adjustment-reason-lists-routing.module';
import { TableAdjustmentReasonListsComponent } from './components/table-adjustment-reason-lists/table-adjustment-reason-lists.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdjustmentReasonListsRoutingModule,
    SharedModule
  ],
  declarations: [TableAdjustmentReasonListsComponent]
})
export class AdjustmentReasonListsModule { }
