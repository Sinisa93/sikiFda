import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRoomClassesComponent } from './components/table-room-classes/table-room-classes.component';

const routes: Routes = [
  {
    path: '',
    component: TableRoomClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomClassesRoutingModule { }
