import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, DialogContentExampleDialog } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './../shared/shared.module';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ActionRenderer } from './cell-renderer/action-renderer.component';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        AgGridModule.withComponents([ActionRenderer])
    ],
    declarations: [
        ProductComponent,
        DialogContentExampleDialog,
        ProductDialogComponent,
        ActionRenderer
    ],
    exports: [ProductComponent, ProductDialogComponent],
    entryComponents: [DialogContentExampleDialog, ProductDialogComponent]
})
export class ProductModule { }
