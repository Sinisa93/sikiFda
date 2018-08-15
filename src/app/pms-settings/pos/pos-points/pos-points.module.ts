import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosPointsRoutingModule } from './pos-points-routing.module';
import { TablePosPointsComponent } from './components/table-pos-points/table-pos-points.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormPosPointsComponent } from './components/form-pos-points/form-pos-points.component';
import { FormPosCategoriesComponent } from '../categories/components/form-pos-categories/form-pos-categories.component';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  imports: [
    CommonModule,
    PosPointsRoutingModule,
    SharedModule,
    CategoriesModule
  ],
  entryComponents: [FormPosPointsComponent, FormPosCategoriesComponent],
  declarations: [TablePosPointsComponent, FormPosPointsComponent]
})
export class PosPointsModule { }
