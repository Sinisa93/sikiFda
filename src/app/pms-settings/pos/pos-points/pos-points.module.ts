import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosPointsRoutingModule } from './pos-points-routing.module';
import { TablePosPointsComponent } from './components/table-pos-points/table-pos-points.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormPosPointsComponent } from './components/form-pos-points/form-pos-points.component';

@NgModule({
  imports: [
    CommonModule,
    PosPointsRoutingModule,
    SharedModule
  ],
  entryComponents: [FormPosPointsComponent],
  declarations: [TablePosPointsComponent, FormPosPointsComponent]
})
export class PosPointsModule { }
