import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, DialogContentExampleDialog } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './../shared/shared.module';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ActionRenderer } from './cell-renderer/action-renderer.component';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
//import { MessageDialogComponent } from './message-dialog/message-dialog';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        AgGridModule.withComponents([ActionRenderer])
    ],
    declarations: [
        ProductComponent,
        ActionRenderer,
        DialogContentExampleDialog,
        ProductEditDialogComponent,
        ProductDialogComponent,
        //MessageDialogComponent
    ],
    exports: [ProductComponent],
    entryComponents: [DialogContentExampleDialog, ProductDialogComponent,
        ProductEditDialogComponent] // MessageDialogComponent
})
export class ProductModule { }
