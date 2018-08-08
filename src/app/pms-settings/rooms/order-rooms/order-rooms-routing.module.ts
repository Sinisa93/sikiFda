import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableOrderRoomsComponent } from './components/table-order-rooms/table-order-rooms.component';

const routes: Routes = [
  {
    path:'',
    component:TableOrderRoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoomsRoutingModule { }
