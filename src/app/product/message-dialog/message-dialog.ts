import { Inject, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'message-dialog',
    templateUrl: 'message-dialog.html',
    styleUrls: ['message-dialog.scss']
})
export class MessageDialogComponent {
    public message = "Empty Message";

    constructor(public dialogRef: MatDialogRef<MessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log("Inside message dialog")
        console.log(data);
        this.message = data.message;
    }

    save() {
        this.dialogRef.close("dialog closed");
    }

    close() {
        this.dialogRef.close("message dialog closed");
    }
}