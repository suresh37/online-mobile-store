import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'product-dialog',
    templateUrl: 'product-dialog.html',
    styleUrls: ['product-dialog.scss']
})
export class ProductDialogComponent {

    constructor(public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.dialogRef.updateSize('50%', '50%');
    }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }


}