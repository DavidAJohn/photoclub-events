import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  isSubmitting = false;

  get email(){
    return this.loginForm.get('email')
    }
  
  get password(){
    return this.loginForm.get('password')
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
  
    this.isSubmitting = true;

    this.authService.signIn({ identifier: email, password })
      .subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/');
            this.isSubmitting = false;
          },
          error: ({ error }) => {
            if(error.statusCode === 400) {
              this.loginForm.setErrors({ credentials: true });
            } else {
              this.loginForm.setErrors({ unknown: true });
            }
            this.isSubmitting = false;
          }
        }
    )
  }

}