import {Component, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {AuthenticationService} from '../../services/authentication.service';
import {SignInRequest} from '../../model/sign-in.request';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatLabel,
    ReactiveFormsModule,
    NgIf,
    MatInput,
    MatButton,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
  }
}


