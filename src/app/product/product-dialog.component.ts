import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'product-dialog',
    templateUrl: 'product-dialog.html',
})
export class ProductDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}