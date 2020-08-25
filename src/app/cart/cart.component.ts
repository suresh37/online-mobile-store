import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items;

  constructor(public cartService: CartService) {
    this.cartService.getCartItems()
      .subscribe(items => {
        this.items = items
        console.log('this.items=', this.items);
      });

  }

  ngOnInit() {
  }

}
