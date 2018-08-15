import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TablePosCategoriesComponent } from './components/table-pos-categories/table-pos-categories.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormPosCategoriesComponent } from './components/form-pos-categories/form-pos-categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ],
  declarations: [TablePosCategoriesComponent, FormPosCategoriesComponent],
  entryComponents: [FormPosCategoriesComponent]
})
export class CategoriesModule { }
