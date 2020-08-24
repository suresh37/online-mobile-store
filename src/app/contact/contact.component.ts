import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MessageDialogComponent } from './../product/message-dialog/message-dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( public dialog: MatDialog) {
    console.log("Inside Contact component")
  }

  ngOnInit() {
  }

  public submitForm(){
     this.openMessageDialog("Your feedback has been submitted");
  }

  public openMessageDialog(message) {
    let data = { message };
    const dialogConfig = new MatDialogConfig(); //dialogConfig.disableClose = true; //dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}
