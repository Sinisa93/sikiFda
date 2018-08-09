import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TablePosCategoriesComponent } from './components/table-pos-categories/table-pos-categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [TablePosCategoriesComponent]
})
export class CategoriesModule { }
