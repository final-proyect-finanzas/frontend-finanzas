import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthenticationSectionComponent} from './iam/components/authentication-section/authentication-section.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationSectionComponent, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
