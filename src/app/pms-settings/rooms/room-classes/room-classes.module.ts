import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomClassesRoutingModule } from './room-classes-routing.module';
import { TableRoomClassesComponent } from './components/table-room-classes/table-room-classes.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoomClassesRoutingModule
  ],
  declarations: [TableRoomClassesComponent]
})
export class RoomClassesModule { }
