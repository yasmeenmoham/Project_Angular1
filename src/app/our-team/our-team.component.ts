import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  TeamMember: any[] = []; // Define your menu items array

  constructor() { }
// Array of team members
ngOnInit(): void {
  this.TeamMember = [
    {
        name: "John Doe",
        job: "Head Chef",
        image: "./assets/team-1.jpg"
    },
    {
        name: "Jane Smith",
        job: "Sous Chef",
        image: "./assets/team-2.jpg"
    },
    {
        name: "Michael Johnson",
        job: "Pastry Chef",
        image: "./assets/team-3.jpg"
    },
    {
        name: "David Johnson",
        job: "Pastry Chef",
        image: "./assets/team-4.jpg"
    },
    {
        name: "David Emily",
        job: "Server",
        image: "./assets/testimonial-1.jpg"
    },
    {
        name: "Sophia Emily",
        job: "Designer",
        image: "./assets/testimonial-2.jpg"
    },
    {
        name: "David John",
        job: "Cashier",
        image: "./assets/testimonial-4.jpg"
    }
    ,
    {
        name: "David Johnson",
        job: "Pastry Chef",
        image: "./assets/team-4.jpg"
    }
    // Add more team members as needed
];
}
}
