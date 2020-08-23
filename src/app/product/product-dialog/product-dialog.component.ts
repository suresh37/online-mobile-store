import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'product-dialog',
    templateUrl: 'product-dialog.html',
})
export class ProductDialogComponent {

    constructor(public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }


}