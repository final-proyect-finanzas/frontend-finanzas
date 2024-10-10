import {Component, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {Company} from '../../model/company.entity';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    NgIf,
    MatLabel,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButton,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private companyService: CompanyService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      roles: this.builder.array(['ROLE_COMPANY'])
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const company: Company = this.form.value;
    this.companyService.createCompany(company).subscribe({
      next: (response) => {
        console.log('Company created successfully', response);
        this.submitted = true;
        this.snackBar.open('Profile created successfully!', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/sign-in']);
      },
      error: (error) => {
        console.error('Error creating company', error);
      }
    });
  }
}
