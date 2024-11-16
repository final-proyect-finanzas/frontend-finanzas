import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import {ToolbarComponent} from "../../../public/component/toolbar/toolbar.component";

@Component({
  selector: 'app-report-wallet',
  standalone: true,
    imports: [NgIf, ToolbarComponent],
  templateUrl: './report-wallet.component.html',
  styleUrls: ['./report-wallet.component.css']
})
export class ReportWalletComponent implements OnInit {
  pdfSrc: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private walletService: WalletService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const walletId = this.route.snapshot.paramMap.get('walletId');
    if (walletId) {
      this.walletService.getReport(walletId).subscribe({
        next: (data: string) => {
          console.log('Backend response:', data);
          try {
            const byteCharacters = atob(data);
            const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            console.log('Blob URL:', url); // Log the Blob URL
            this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          } catch (error) {
            console.error('Error processing base64 data:', error);
          }
        },
        error: (err) => {
          console.error('Error fetching report:', err);
        }
      });
    } else {
      console.error('No walletId found in route parameters');
    }
  }


}
