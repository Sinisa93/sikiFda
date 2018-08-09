import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { TablePosProductsComponent } from './components/table-pos-products/table-pos-products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [TablePosProductsComponent]
})
export class ProductsModule { }
