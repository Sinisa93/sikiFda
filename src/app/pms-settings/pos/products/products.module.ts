import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { TablePosProductsComponent } from './components/table-pos-products/table-pos-products.component';
import { FormPosProductsComponent } from './components/form-pos-products/form-pos-products.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [TablePosProductsComponent, FormPosProductsComponent],
  entryComponents:[FormPosProductsComponent]
})
export class ProductsModule { }
