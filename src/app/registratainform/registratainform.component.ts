import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registratainform',
  templateUrl: './registratainform.component.html',
  styleUrls: ['./registratainform.component.css']
})
export class RegistratainformComponent {
  registrationForm!: FormGroup;
  states = ['California', 'New York', 'Texas']; 
  cities = ['Los Angeles', 'New York City', 'Houston'];
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registrationForm = this. formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
      repeatPassword:['',Validators.required],
    });
   }
   get f() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.router.navigate(['/login']);
  }
  
  resetForm() {
    this.registrationForm.reset();
  }
}
