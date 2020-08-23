import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'product-edit-dialog',
    templateUrl: 'product-edit-dialog.html',
})
export class ProductEditDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}