import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { BillsService } from '../../../bills/services/bills.service';
import { WalletService } from '../../../wallets/services/wallet.service';
import { Bills } from '../../model/bills.entity';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ToolbarComponent } from "../../../public/component/toolbar/toolbar.component";

@Component({
  selector: 'app-view-bills',
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
    MatButton,
    NgForOf,
    DatePipe,
    ToolbarComponent,
    NgIf
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
    'debtorDocumentIdentifier',
    'actions'
  ];

  bills = new MatTableDataSource<Bills>([]);
  wallets: any[] = [];
  selectedWalletId: string | null = null;
  currencyMismatch: boolean = false; // Nueva propiedad para manejar el estado del error

  constructor(
    private billsService: BillsService,
    private walletService: WalletService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('companyId');
      if (companyId) {
        this.billsService.getBillsByCompanyId(companyId).subscribe((data: Bills[]) => {
          this.bills.data = data;
          console.log(data);
        });
        this.walletService.getWalletsByCompanyId(companyId).subscribe(wallets => {
          this.wallets = wallets.filter(wallet => !wallet.isDiscounted);
        });
      }
    });
  }

  addBillToWallet(billId: number): void {
    console.log('addBillToWallet', billId);
    console.log('selectedWalletId', this.selectedWalletId);
    if (!this.selectedWalletId) {
      alert('Please select a wallet');
      return;
    }

    const selectedWallet = this.wallets.find(wallet => wallet.id === parseInt(<string>this.selectedWalletId, 10));
    console.log('wallets', this.wallets);
    console.log('selectedWallet', selectedWallet);
    const bill = this.bills.data.find(bill => bill.id === billId);
    console.log('bill', bill);

    if (selectedWallet && bill) {
      if (selectedWallet.currency === bill.currency) {
        this.currencyMismatch = false;
        this.walletService.addBillToWallet(this.selectedWalletId, billId).subscribe(() => {
          alert('Bill added to wallet successfully');
        });
      } else {
        this.currencyMismatch = true;
        alert(`No puedes añadir una factura con moneda ${bill.currency} a una cartera con moneda de ${selectedWallet.currency}`);
        console.error(`Cannot add bill with currency ${bill.currency} to wallet with currency ${selectedWallet.currency}`);
      }
    }
  }
}
