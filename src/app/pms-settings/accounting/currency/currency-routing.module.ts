import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCurrencyComponent } from './components/form-currency/form-currency.component';

const routes: Routes = [
  {
    path:"",
    component:FormCurrencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
