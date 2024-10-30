import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-details-wallet',
  standalone: true,
  imports: [MatCardModule,MatLabel, MatButtonModule, CommonModule, MatDivider, ReactiveFormsModule, MatFormField, MatSelect, MatOption],
  templateUrl: './details-wallet.component.html',
  styleUrls: ['./details-wallet.component.css']
})
export class DetailsWalletComponent implements OnInit {
  wallet: any;
  banks: any[] = [];
  selectedBankId = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private walletService: WalletService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const walletId = this.route.snapshot.paramMap.get('walletId');
    if (walletId) {
      this.walletService.getWalletById(walletId).subscribe((data) => {
        this.wallet = data;
      });
    }
    // @ts-ignore
    this.walletService.getBanks().subscribe((data: any[]) => {
      this.banks = data;
    });
  }

  generateDiscount(): void {
    if (this.wallet && this.wallet.id && this.selectedBankId.value) {
      this.walletService.generateDiscount(this.wallet.id, this.selectedBankId.value).subscribe(() => {
        this.wallet.isDiscounted = true;
      });
    } else {
      alert('Please select a bank');
    }
  }

  viewReport(): void {
    if (this.wallet && this.wallet.id) {
      this.router.navigate([`/wallet/${this.wallet.id}/report`]);
    }
  }

}
