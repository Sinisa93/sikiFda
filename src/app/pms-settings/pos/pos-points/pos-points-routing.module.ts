import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePosPointsComponent } from './components/table-pos-points/table-pos-points.component';

const routes: Routes = [
  {
    path:'',
    component:TablePosPointsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosPointsRoutingModule { }
