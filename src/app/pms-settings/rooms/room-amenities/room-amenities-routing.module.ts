import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRoomAmenitiesComponent } from './components/table-room-amenities/table-room-amenities.component';

const routes: Routes = [
  {
    path:'',
    component:TableRoomAmenitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomAmenitiesRoutingModule { }
