import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { BillsService } from '../../../bills/services/bills.service';
import { WalletService } from '../../../wallets/services/wallet.service';
import { Bills } from '../../model/bills.entity';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-view-bills',
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
    MatButton,
    NgForOf,
    DatePipe
  ],
  templateUrl: './view-bills.component.html',
  styleUrls: ['./view-bills.component.css']
})
export class ViewBillsComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'fechaE',
    'fechaF',
    'cantidad',
    'moneda',
    'nombreOperador',
    'nombreCompania',
    'actions'
  ];

  bills = new MatTableDataSource<Bills>([]);
  wallets: any[] = [];
  selectedWalletId: string | null = null;

  constructor(
    private billsService: BillsService,
    private walletService: WalletService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('companyId');
      if (companyId) {
        // @ts-ignore
        this.billsService.getBillsByCompanyId(companyId).subscribe((data: Bills[]) => {
          this.bills.data = data;
        });
        this.walletService.getWalletsByCompanyId(companyId).subscribe(wallets => {
          this.wallets = wallets;
        });
      }
    });
  }

  addBillToWallet(billId: number): void {
    if (this.selectedWalletId) {
      this.walletService.addBillToWallet(this.selectedWalletId, billId).subscribe(() => {
        alert('Bill added to wallet successfully');
      });
    } else {
      alert('Please select a wallet');
    }
  }
}
