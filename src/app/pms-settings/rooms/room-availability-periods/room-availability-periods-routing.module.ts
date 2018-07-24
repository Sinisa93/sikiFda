import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAvailabilityPeriodsComponent } from './components/table-availability-periods/table-availability-periods.component';

const routes: Routes = [
  {
    path:'',
    component:TableAvailabilityPeriodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomAvailabilityPeriodsRoutingModule { }
