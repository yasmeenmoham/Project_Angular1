import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFrom!: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.loginFrom = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }
   get f() {
    return this.loginFrom.controls;
  }
  ngOnInit(): void {
   
  }
  onSubmit() {
    console.log(this.loginFrom.value );

    if (this.loginFrom.value.mail == 'admin@gmail.com' || this.loginFrom.value.pass == '123456' ||this.loginFrom.value.name=='yasmeen') {

      console.log(this.loginFrom.value.mail );
      this.router.navigate(['/home']);
    }
   
  }
}
