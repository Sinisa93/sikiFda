import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAdjustmentReasonListsComponent } from './components/table-adjustment-reason-lists/table-adjustment-reason-lists.component';

const routes: Routes = [
  {
    path:'',
    component:TableAdjustmentReasonListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjustmentReasonListsRoutingModule { }
