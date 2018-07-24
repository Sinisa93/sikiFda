import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'room-classes',
    loadChildren: './room-classes/room-classes.module#RoomClassesModule'
  },
  {
    path: 'room-amenities',
    loadChildren: './room-amenities/room-amenities.module#RoomAmenitiesModule'
  },
  {
    path: 'room-availability-periods',
    loadChildren: './room-availability-periods/room-availability-periods.module#RoomAvailabilityPeriodsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
