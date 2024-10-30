import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from '../../model/wallet';
import {MatCardModule} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-view-wallets',
  standalone: true,
  imports: [MatCardModule, MatDivider, DatePipe, NgIf, NgForOf, MatButton],
  templateUrl: './view-wallets.component.html',
  styleUrl: './view-wallets.component.css'
})
export class ViewWalletsComponent implements OnInit {
  wallets: Wallet[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('companyId');
      if (companyId) {
        this.walletService.getWalletsByCompanyId(companyId).subscribe(wallets => {
          this.wallets = wallets;
        });
      }
    });
  }

  navigateToCreateWallet(): void {
    const companyId = this.route.snapshot.paramMap.get('companyId');
    this.router.navigate([`/wallets/create/${companyId}`]);
  }
}
