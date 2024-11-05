import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { Router, ActivatedRoute } from '@angular/router';
import { BillsService } from '../../services/bills.service';
import { Bills } from '../../model/bills.entity';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import {ToolbarComponent} from '../../../public/component/toolbar/toolbar.component';

@Component({
  selector: 'app-post-bills',
  standalone: true,
  imports: [
    MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle,
    MatButton,
    MatInput, MatDatepickerModule, ReactiveFormsModule, MatLabel, MatFormFieldModule, MatSelect, MatOption, ToolbarComponent
  ],
  templateUrl: './post-bills.component.html',
  styleUrl: './post-bills.component.css'
})
export class PostBillsComponent implements OnInit {
  form!: FormGroup;
  companyId!: number;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private billsService: BillsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = +params['companyId']; // The + sign converts the parameter to a number
    });

    this.form = this.fb.group({
      numeroLetra: ['', [Validators.required]],
      fechaEmision: ['', [Validators.required]],
      fechaVencimiento: ['', [Validators.required]],
      montoTotal: ['', [Validators.required, this.positiveAmountValidator]],
      moneda: ['', [Validators.required]],
      deudores: ['', [Validators.required]],
    });
  }

  positiveAmountValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value !== null && value < 0) {
      return { negativeAmount: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const billData: Bills = {
      number: this.form.value.numeroLetra,
      issueDate: new Date(this.form.value.fechaEmision),
      dueDate: new Date(this.form.value.fechaVencimiento),
      amount: this.form.value.montoTotal,
      currency: this.form.value.moneda,
      debtorName: this.form.value.deudores,
      companyId: this.companyId
    };
    console.log(billData);
    this.billsService.createBill(billData).subscribe({

      next: response => {
        console.log('Bill created successfully:', response);
        this.router.navigate([`/home/${this.companyId}`]);
      },
      error: error => {
        console.error('Error creating bill:', error);
      }
    });
  }

  onBack(): void {
    this.router.navigate([`/home/${this.companyId}`]);
  }
}
