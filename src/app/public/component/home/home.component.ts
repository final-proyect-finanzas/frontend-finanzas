import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthenticationService) {}

  navigateToPostBills(): void {
    this.router.navigate(['/post-bills']);
  }

  logOut(): void {
    this.authService.signOut();
  }
}
