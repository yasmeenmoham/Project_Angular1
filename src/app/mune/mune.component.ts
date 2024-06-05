import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mune',
  templateUrl: './mune.component.html',
  styleUrls: ['./mune.component.css'],
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})

export class MuneComponent {
  menu: any[] = []; // Define your menu items array
  selectedTime: string = ''; // Initialize selectedTime property

  selectTime(time: string, index: number) {
    // Set the selected time for the card at the given index
    this.menu[index].selectedTime = time;
  }
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
        name: "Soup",
        price: 12.99,
   
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-6.jpg",
        name: "Soup",
        price: 12.99,
      
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-7.jpg",
        name: "Chicken",
        price: 12.99,
     
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-8.jpg",
        name: "Sushi",
        price: 12.99,
  
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      { 
        image: "../assets/menu-5.jpg",
        name: "Shrapio",
        price: 12.99,
       
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      // Add more items as needed
    ];
    
  }

  
}
