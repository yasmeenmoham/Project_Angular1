import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menu: any[] = []; // Define your menu items array

  constructor() { }

  ngOnInit(): void {
    // Populate the menu array
    this.menu = [
      { 
        image: "../assets/menu-2.jpg",
        name: "Burger",
        price: 10.99,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-2.jpg",
        name: "Pizza",
        price: 12.99,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-3.jpg",
        name: "Sailoin",
        price: 12.99,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-4.jpg",
        name: "Sandwich",
        price: 12.99,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-7.jpg",
        name: "Salat Chicken",
        price: 12.99,
   
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-6.jpg",
        name: "Chicken",
        price: 12.99,
      
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      // Add more items as needed
    ];
    
  }
  
}
