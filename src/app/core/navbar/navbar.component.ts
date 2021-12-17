import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;
  
  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
  }

}
