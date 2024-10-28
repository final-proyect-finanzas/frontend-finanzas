import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { HomeComponent } from './public/component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationSectionComponent, SignInComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  protected options = [
    { path: '/home', title: 'Home' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    // Clear sessionStorage
    sessionStorage.clear();

    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    });

    if (token) {
      // If token exists, navigate to home
      this.router.navigate(['/home']).then(() => {
        console.log('Navigated to home');
      });
    } else {
      // If no token, navigate to sign-in
      this.router.navigate(['/sign-in']).then(() => {
        console.log('Navigated to sign-in');
      });
    }
  }
}
