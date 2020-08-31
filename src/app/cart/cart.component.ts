import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items;

  constructor(public cartService: CartService) {
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
    this.cartService.deleteCartItem(item);
    this.getCartData();
  }

}
