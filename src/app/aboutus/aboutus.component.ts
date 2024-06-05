import { Component } from '@angular/core';


import {  ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  @ViewChild('imagesContainer') imagesContainer!: ElementRef<HTMLDivElement>;
  // numberOfExperiences: number = 1234;
  // numberOfChefs: number = 15;
  // experienceCount = 5; // Example count for experiences
  // chefCount = 3; // Example count for chefs

  currentExperience = 0;
  targetExperience = 1234; // Set your target experience count here


  currentChefs = 0;
  targetChefs = 15; // Set your target experience count here
  intervalSubscription: Subscription | undefined;

  experienceBoxes: number[] = [];
  chefBoxes: number[] = [];

  constructor() {
    // Start the interval when the component initializes
    this.startInterval();
    this.startInterval2();
  }
  startInterval(): void {
    this.intervalSubscription = interval(100) // Interval of 100 milliseconds
      .pipe(
        takeWhile(() => this.currentExperience < this.targetExperience)
      )
      .subscribe(() => {
        // Increment the current experience until it reaches the target experience
        this.currentExperience++;
      });
  }
  startInterval2(): void {
    this.intervalSubscription = interval(100) // Interval of 100 milliseconds
      .pipe(
        takeWhile(() => this.currentChefs < this.targetChefs)
      )
      .subscribe(() => {
        // Increment the current experience until it reaches the target experience
        this.currentChefs++;
      });
  }
  
  ngOnInit(): void {
  //   this.experienceBoxes = this.generateBoxArray(this.numberOfExperiences);
  // this.chefBoxes = this.generateBoxArray(this.numberOfChefs);
  this.showImagesWithDelay();
  }
  // private generateBoxArray(count: number): number[] {
  //   return Array.from({ length: count }, (_, i) => i);
  // }
  generateNumberArray(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index);
  }
  showImagesWithDelay(): void {
    const images = this.imagesContainer.nativeElement.querySelectorAll('img');
    let index = 0;
    const delay = 1000; // Delay between showing images in milliseconds

    const showImage = () => {
      if (index < images.length) {
        images[index].style.opacity = '1';
        index++;
        setTimeout(showImage, delay);
      }
    };
    images.forEach((image) => {
      image.style.opacity = '0';
    });

    showImage();
  }
}
