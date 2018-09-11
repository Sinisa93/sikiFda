import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCreditCardPurgeComponent } from './components/form-credit-card-purge/form-credit-card-purge.component';

const routes: Routes = [
  {
    path:"",
    component:FormCreditCardPurgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardPurgeRoutingModule { }
