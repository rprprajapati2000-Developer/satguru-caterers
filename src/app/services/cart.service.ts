import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item';
// import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: MenuItem[] = [];
  private cartSubject = new BehaviorSubject<MenuItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: MenuItem) {
    this.cart.push(item);
    this.cartSubject.next(this.cart);
  }

  getCart(): MenuItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}