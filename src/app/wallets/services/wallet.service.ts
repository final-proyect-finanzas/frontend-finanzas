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

}
