import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [FilterComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
