import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9]+$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$')
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required
    ]),
  }, { validators: [this.matchPassword.validate] });

  isSubmitting = false;

  get username() {
    return this.regForm.get('username');
  }

  get email(){
    return this.regForm.get('email');
  }
  
  get password(){
    return this.regForm.get('password');
  }

  get passwordConfirm(){
    return this.regForm.get('passwordConfirm');
  }

  constructor(private authService: AuthService, private router: Router, private matchPassword: MatchPassword) 
  { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.regForm.invalid) return;

    const { username, email, password } = this.regForm.value;

    this.isSubmitting = true;

    this.authService.register({ username, identifier: email, password })
      .subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/');
            this.isSubmitting = false;
          },
          error: ({ error }) => {
            if(error.statusCode === 400) {
              this.regForm.setErrors({ credentials: true });
            } else {
              this.regForm.setErrors({ unknown: true });
            }
            this.isSubmitting = false;
          }
        }
    )
  }
}
