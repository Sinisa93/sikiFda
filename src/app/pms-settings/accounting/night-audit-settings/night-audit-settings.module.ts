import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NightAuditSettingsRoutingModule } from './night-audit-settings-routing.module';
import { FormNightAuditSettingsComponent } from './components/form-night-audit-settings/form-night-audit-settings.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NightAuditSettingsRoutingModule,
    SharedModule
  ],
  declarations: [FormNightAuditSettingsComponent]
})
export class NightAuditSettingsModule { }
