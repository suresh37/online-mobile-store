import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'product-add-dialog',
    templateUrl: 'product-add-dialog.html',
    styleUrls: ['product-add-dialog.scss']
})
export class ProductAddDialogComponent {
    public form: FormGroup;
    //public description: string;
    public formData;
    constructor(public fb: FormBuilder,
        public dialogRef: MatDialogRef<ProductAddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        //this.formData = data;
    }

    ngOnInit() {
        //this.dialogRef.updateSize('80%', '80%');
        this.form = this.fb.group({
            brandName: [, []],
            price: [, []],
            model: [, []],
            quantity: [, []],
            os: [, []],
            year: [, []],
        });
    }

    save() {
        //this.form.value.id = this.formData.id;
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}