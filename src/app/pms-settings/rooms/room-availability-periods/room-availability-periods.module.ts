import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomAvailabilityPeriodsRoutingModule } from './room-availability-periods-routing.module';
import { TableAvailabilityPeriodsComponent } from './components/table-availability-periods/table-availability-periods.component';
import { SharedModule } from '../../../shared/shared.module';
import { AddEditDialogAvailabilityPeriodsComponent } from './components/add-edit-dialog-availability-periods/add-edit-dialog-availability-periods.component';

@NgModule({
  imports: [
    CommonModule,
    RoomAvailabilityPeriodsRoutingModule,
    SharedModule
  ],
  declarations: [TableAvailabilityPeriodsComponent, AddEditDialogAvailabilityPeriodsComponent],
  entryComponents: [AddEditDialogAvailabilityPeriodsComponent]
})
export class RoomAvailabilityPeriodsModule { }
