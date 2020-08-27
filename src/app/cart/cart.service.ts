import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public _jsonURL = 'assets/mobile-api.json';
  public cartItems: any[] = [{
    product: "Redmi Note 9 pro",
    count: 2
  }];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log("service to mobile-api json - constructor")
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/mobile-api.json");
  }

  public addItemToCart(obj): void {
        this.cartItems.push(obj);
    }


  public getCartItems(): Observable<any> {
    return Observable.create(observer => {
      //this.http.get('http://users.org').map(response => response.json();
      observer.next(this.cartItems);
      observer.complete();
    })
  }
}
