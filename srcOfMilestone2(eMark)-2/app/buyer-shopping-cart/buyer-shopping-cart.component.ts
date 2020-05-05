import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-buyer-shopping-cart',
  templateUrl: './buyer-shopping-cart.component.html',
  styleUrls: ['./buyer-shopping-cart.component.css']
})
export class BuyerShoppingCartComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  
}
