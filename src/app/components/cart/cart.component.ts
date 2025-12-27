import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
// import { MenuItem } from '../../models/menu-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: MenuItem[] = [];
  total = 0;

  constructor(private cartService: CartService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.getTotal();
    });
  }

  checkout() {
    this.snackBar.open('Contact us at [phone/email] to finalize booking!', 'Close', { duration: 3000 });
    // Integrate payment gateway here
  }
}