import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLabel} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-bills',
  standalone: true,
  imports: [
    MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle,
    MatButton,
    MatInput, MatFormField, ReactiveFormsModule, MatLabel
  ],
  templateUrl: './post-bills.component.html',
  styleUrl: './post-bills.component.css'
})
export class PostBillsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numeroLetra: ['', Validators.required],
      deudores: ['', Validators.required],
      banco: ['', Validators.required],
      fechaEmision: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      moneda: ['', Validators.required],
      montoTotal: ['', Validators.required],
      tasa: ['', Validators.required],
      fechaDescuento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const billData = this.form.value;
    // Aquí se realizaría la lógica para obtener el companyId y hacer el POST
    console.log('Bill Data:', billData);
    // Redirigir o mostrar mensaje de éxito
  }

  onBack(): void {
    this.router.navigate(['/home']); // Cambia '/previous-page' por la ruta correcta
  }
}
