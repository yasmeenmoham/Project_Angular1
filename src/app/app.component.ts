import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-food-project';
  hideNavbarFooter: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.hideNavbarFooter = this.shouldHideNavbarFooter();
  }

  shouldHideNavbarFooter(): boolean {
    // Check if the current route is the login or registration page
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/Registian';
  }
}
