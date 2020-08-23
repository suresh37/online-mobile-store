import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'product-edit-dialog',
    templateUrl: 'product-edit-dialog.html',
    styleUrls: ['product-edit-dialog.scss']
})
export class ProductEditDialogComponent {
    public form: FormGroup;
    public description: string;
    public formData;
    constructor(public fb: FormBuilder,
        public dialogRef: MatDialogRef<ProductEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.formData = data;
    }

    ngOnInit() {
        //this.dialogRef.updateSize('80%', '80%');
        this.form = this.fb.group({
            brandName: [this.formData.brandName, []],
            price: [this.formData.price, []],
            model: [this.formData.model, []],
            quantity: [this.formData.quantity, []],
            os: [this.formData.os, []],
            year: [this.formData.year, []],
        });
    }

    save() {
        this.form.value.id = this.formData.id;
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}