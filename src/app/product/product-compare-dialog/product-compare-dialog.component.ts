import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'product-compare-dialog',
    templateUrl: 'product-compare-dialog.html',
    styleUrls: ['product-compare-dialog.scss']
})
export class ProductCompareDialogComponent {
    public dataSrc;
    displayedColumns: string[]; // = ['Specs', 'c1', 'c2', 'c3'];
    firstColumnData: string[] = ['brandName', 'price', 'model', 'quantity', 'os', 'year'];

    constructor(public fb: FormBuilder,
        public dialogRef: MatDialogRef<ProductCompareDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.dataSrc = data;
        this.displayedColumns = ["specs", "mobile1", "mobile2", "mobile3"];
    }

    ngOnInit() {
        //this.dialogRef.updateSize('80%', '80%');
    }

    save() {
        //this.form.value.id = this.formData.id;
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}