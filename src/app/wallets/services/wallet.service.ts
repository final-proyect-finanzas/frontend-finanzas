import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Wallet } from '../model/wallet';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService extends BaseService<Wallet> {
  constructor(protected override http: HttpClient) {
    super();
    this.resourceEndpoint = '/wallets';
  }

  createWallet(wallet: any): Observable<any> {
    return this.create(wallet);
  }

  getWalletsByCompanyId(companyId: string): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${this.basePath}/wallets/company/${companyId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getWalletById(walletId: any): Observable<any> {
    return this.getById(walletId);
  }

  addBillToWallet(walletId: any, billId: any): Observable<any> {
    return this.http.put(`${this.basePath}/wallets/${walletId}/bill/${billId}`, null, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  generateDiscount(walletId: any, bankId: any){
    return this.http.put(`${this.basePath}/wallets/discount/${walletId}/bank/${bankId}`, null, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getBanks(){
    return this.http.get(`${this.basePath}/banks`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getReport(walletId: any): Observable<string> {
    return this.http.get(`${this.basePath}/reports/pdf/${walletId}`, { responseType: 'text' })
      .pipe(retry(2), catchError(this.handleError));
  }

}
