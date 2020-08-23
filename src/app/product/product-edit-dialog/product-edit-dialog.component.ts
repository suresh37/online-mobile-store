import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'product-edit-dialog',
    templateUrl: 'product-edit-dialog.html',
})
export class ProductEditDialogComponent {
    public form: FormGroup;
    public description: string;

    constructor(public fb: FormBuilder,
        public dialogRef: MatDialogRef<ProductEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}