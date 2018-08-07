import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomAmenitiesRoutingModule } from './room-amenities-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { TableRoomAmenitiesComponent } from './components/table-room-amenities/table-room-amenities.component';
//import { AddEditDialogRoomAmenitiesComponent } from './components/add-edit-dialog-room-amenities/add-edit-dialog-room-amenities.component';
import { FormRoomAmenitiesComponent } from './components/form-room-amenities/form-room-amenities.component';

@NgModule({
  imports: [
    CommonModule,
    RoomAmenitiesRoutingModule,
    SharedModule
  ],
  declarations: [TableRoomAmenitiesComponent, FormRoomAmenitiesComponent],
  entryComponents:[FormRoomAmenitiesComponent]
})
export class RoomAmenitiesModule { }
