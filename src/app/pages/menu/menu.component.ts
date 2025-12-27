import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  selectedCategory: string = 'all';

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Paneer Butter Masala',
      description: 'Rich and creamy paneer curry',
      price: 220,
      isVeg: true,
      image: 'assets/images/paneer.jpg',
      category: 'mains'
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      description: 'Hyderabadi style dum biryani',
      price: 280,
      isVeg: false,
      image: 'assets/images/biryani.jpg',
      category: 'mains'
    },
    {
      id: 3,
      name: 'Veg Spring Roll',
      description: 'Crispy vegetable rolls',
      price: 120,
      isVeg: true,
      image: 'assets/images/sprinrol.jpg',
      category: 'appetizers'
    },
       {
      id: 4,
      name: 'Manchuriyan Dry',
      description: 'Crispy vegetable rolls',
      price: 120,
      isVeg: true,
      image: 'assets/images/ball.jpg',
      category: 'appetizers'
    },
       {
      id: 5,
      name: 'Paneer Tikka',
      description: 'Crispy vegetable rolls',
      price: 120,
      isVeg: true,
      image: 'assets/images/paneerchilli.jpg',
      category: 'appetizers'
    }
  ];

  get filteredMenuItems(): MenuItem[] {
    if (this.selectedCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(
      item => item.category === this.selectedCategory
    );
  }

  addToCart(item: MenuItem): void {
    alert(`${item.name} added to cart`);
  }
}
