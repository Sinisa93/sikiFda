import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNightAuditSettingsComponent } from './components/form-night-audit-settings/form-night-audit-settings.component';

const routes: Routes = [
  {
    path:"",
    component:FormNightAuditSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NightAuditSettingsRoutingModule { }
