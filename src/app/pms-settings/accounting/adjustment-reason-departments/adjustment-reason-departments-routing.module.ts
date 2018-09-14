import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAdjustmentReasonDepartmentsComponent } from './components/table-adjustment-reason-departments/table-adjustment-reason-departments.component';

const routes: Routes = [
  {
    path:"",
    component:TableAdjustmentReasonDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjustmentReasonDepartmentsRoutingModule { }
