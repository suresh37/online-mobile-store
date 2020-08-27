import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  public cartService: CartService) {
        console.log("Inside cart dialog")
        console.log(data);
    }

  ngOnInit() {
  }

  save() {
        var obj = {};
        this.cartService.addItemToCart(obj);
        this.dialogRef.close("dialog closed");
    }

    close() {
        this.dialogRef.close("cart dialog closed");
    }

}
