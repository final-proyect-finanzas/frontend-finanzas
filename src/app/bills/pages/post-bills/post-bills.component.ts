import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLabel} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { BillsService } from '../../services/bills.service';
import { Bills } from '../../model/bills.entity';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-post-bills',
  standalone: true,
  imports: [
    MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle,
    MatButton,
    MatInput, MatDatepickerModule, ReactiveFormsModule, MatLabel, MatFormFieldModule, MatSelect, MatOption
  ],
  templateUrl: './post-bills.component.html',
  styleUrl: './post-bills.component.css'
})
export class PostBillsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private billsService: BillsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numeroLetra: ['', Validators.required],
      fechaEmision: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      fechaDescuento: ['', Validators.required],
      montoTotal: ['', Validators.required],
      moneda: ['', Validators.required],
      initialCost: [0, Validators.required],
      finalCost: [0, Validators.required],
      deudores: ['', Validators.required],
      portfolioId: [0, Validators.required],
      bankId: [0, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const billData: Bills = {
      number: this.form.value.numeroLetra,
      issueDate: new Date(this.form.value.fechaEmision),
      dueDate: new Date(this.form.value.fechaVencimiento),
      discountDate: new Date(this.form.value.fechaDescuento),
      amount: this.form.value.montoTotal,
      currency: this.form.value.moneda,
      initialCost: this.form.value.initialCost,
      finalCost: this.form.value.finalCost,
      debtorName: this.form.value.deudores,
      portfolioId: this.form.value.portfolioId,
      bankId: this.form.value.bankId
    };
    this.billsService.createBill(billData).subscribe({
      next: response => {
        console.log('Bill created successfully:', response);
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error('Error creating bill:', error);
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/home']); // Change '/home' to the correct route
  }
}
