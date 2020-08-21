import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './../shared/shared.module';
import { ProductDialogComponent } from './product-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        AgGridModule.withComponents([])
    ],
    declarations: [
        ProductComponent,
        ProductDialogComponent
    ],
    exports: [ProductComponent, ProductDialogComponent],
    entryComponents: [ProductDialogComponent]
})
export class ProductModule { }
