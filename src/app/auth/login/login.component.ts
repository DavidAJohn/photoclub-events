import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const formValues = this.loginForm.value;
    const { email, password } = formValues;
    //console.log(`Email: ${email}, Password: ${password}`);

    this.authService.signIn({ identifier: email, password })
      .subscribe(() => {

      }
    )
    
  }

}