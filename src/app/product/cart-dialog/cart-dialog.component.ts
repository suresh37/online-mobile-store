import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  product: string;
  count: number;

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  public cartService: CartService) {
        console.log("Inside cart dialog")
        console.log(data);
        this.product = data.brandName+" "+data.model;
        this.count = 1;
    }

  ngOnInit() {
  }

  save() {
        var obj = {
           product: this.product,
           count: this.count
        };
        this.cartService.addItemToCart(obj);
        this.dialogRef.close("Added to cart");
    }

  close() {
        this.dialogRef.close("cart dialog closed");
    }

}
