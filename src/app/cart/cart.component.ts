import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessageDialogComponent } from '../product/message-dialog/message-dialog';
import { ConfirmDialogComponent } from '../product/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items;

  constructor(public cartService: CartService, public dialog: MatDialog) {
    this.getCartData();
  }

  getCartData() {
    this.cartService.getCartItems()
      .subscribe(items => {
        this.items = items
        console.log('this.items=', this.items);
      });

  }

  ngOnInit() {
  }

  deleteCartItem(item: any) {
    console.log(item);
    const message = 'Are you sure you want to delete ' + item.product + '?';
    var result = false;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (!dialogResult) return;
      this.openMessageDialog(item.product + " has been deleted from cart");
      this.cartService.deleteCartItem(item);
      this.getCartData();
    });
  }

  public openMessageDialog(message) {
    let data = { message };
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}
