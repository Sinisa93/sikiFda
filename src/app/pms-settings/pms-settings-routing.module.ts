import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPmsSettingsComponent } from './components/dashboard-pms-settings/dashboard-pms-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPmsSettingsComponent
  },
  {
    path: 'rooms',
    loadChildren: './rooms/rooms.module#RoomsModule'
  },
  {
    path:'pos',
    loadChildren: './pos/pos.module#PosModule'
  },
  {
    path:'accounting',
    loadChildren: './accounting/accounting.module#AccountingModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmsSettingsRoutingModule { }
