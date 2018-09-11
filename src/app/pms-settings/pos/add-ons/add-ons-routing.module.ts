import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAddOnsComponent } from './components/table-add-ons/table-add-ons.component';

const routes: Routes = [
  {
    path:'',
    component:TableAddOnsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOnsRoutingModule { }
