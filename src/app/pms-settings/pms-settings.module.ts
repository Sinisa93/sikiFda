import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmsSettingsRoutingModule } from './pms-settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardPmsSettingsComponent } from './components/dashboard-pms-settings/dashboard-pms-settings.component';

@NgModule({
  imports: [
    CommonModule,
    PmsSettingsRoutingModule,
    SharedModule
  ],
  declarations: [DashboardPmsSettingsComponent]
})
export class PmsSettingsModule { }
