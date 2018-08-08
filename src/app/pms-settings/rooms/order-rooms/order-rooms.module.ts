import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoomsRoutingModule } from './order-rooms-routing.module';
import { TableOrderRoomsComponent } from './components/table-order-rooms/table-order-rooms.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderRoomsRoutingModule,
    SharedModule
  ],
  declarations: [TableOrderRoomsComponent]
})
export class OrderRoomsModule { }
