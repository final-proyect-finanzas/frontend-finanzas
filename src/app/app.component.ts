import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { HomeComponent } from './public/component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationSectionComponent, SignInComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  protected options = [
    { path: '/home', title: 'Home' },
  ];

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }
}
