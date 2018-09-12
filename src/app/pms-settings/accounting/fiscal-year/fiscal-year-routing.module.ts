import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFiscalYearComponent } from './components/form-fiscal-year/form-fiscal-year.component';

const routes: Routes = [
  {
    path:"",
    component:FormFiscalYearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiscalYearRoutingModule { }
