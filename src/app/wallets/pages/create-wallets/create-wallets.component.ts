import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WalletService } from '../../services/wallet.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {ToolbarComponent} from '../../../public/component/toolbar/toolbar.component';

@Component({
  selector: 'app-create-wallets',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ToolbarComponent
  ],
  templateUrl: './create-wallets.component.html',
  styleUrls: ['./create-wallets.component.css']
})
export class CreateWalletsComponent implements OnInit {
  createWalletForm: FormGroup;
  companyId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private walletService: WalletService
  ) {
    this.createWalletForm = this.fb.group({
      discountDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('companyId');
  }

  onSubmit(): void {
    if (this.createWalletForm.valid && this.companyId) {
      const walletData = {
        companyId: this.companyId,
        discountDate: this.createWalletForm.value.discountDate
      };
      this.walletService.createWallet(walletData).subscribe(() => {
        this.router.navigate([`/wallets/${this.companyId}`]);
      });
    }
  }

  onCancel(): void {
    this.router.navigate([`/wallets/${this.companyId}`]);
  }
}
