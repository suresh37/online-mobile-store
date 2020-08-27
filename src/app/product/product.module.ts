import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, DialogContentExampleDialog } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './../shared/shared.module';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ActionRenderer } from './cell-renderer/action-renderer.component';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { ProductAddDialogComponent } from './product-add-dialog/product-add-dialog.component';
import { ProductCompareDialogComponent } from './product-compare-dialog/product-compare-dialog.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
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
    ProductAddDialogComponent,
    ProductCompareDialogComponent,
    CartDialogComponent
    //MessageDialogComponent
  ],
  exports: [ProductComponent],
  entryComponents: [DialogContentExampleDialog, ProductDialogComponent,
    ProductEditDialogComponent, ProductAddDialogComponent, ProductCompareDialogComponent,
    CartDialogComponent] // MessageDialogComponent
})
export class ProductModule { }
