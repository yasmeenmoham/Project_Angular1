import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  contentArray = [
    { icon: 'fas fa-user', title: 'Master Chefs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-clock', title: '24/7 Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-utensils', title: 'Quality Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-shopping-cart', title: 'Online Order', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-user', title: 'Master Chefs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-clock', title: '24/7 Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-utensils', title: 'Quality Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-shopping-cart', title: 'Online Order', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: 'fas fa-user', title: 'Master Chefs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];
}
