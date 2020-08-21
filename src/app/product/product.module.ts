import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        AgGridModule.withComponents([])
    ],
    declarations: [
        ProductComponent
    ],
    exports: [ProductComponent]
})
export class ProductModule { }
