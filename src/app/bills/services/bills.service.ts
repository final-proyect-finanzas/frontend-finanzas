import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, retry} from 'rxjs';
import { Bills } from '../model/bills.entity';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class BillsService extends BaseService<Bills> {
  constructor(protected override http: HttpClient) {
    super();
    this.resourceEndpoint = '/bills/create';
  }

  createBill(bill: any): Observable<any> {
    return this.create(bill);
  }

  getBillsByCompanyId(companyId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/bills/getByCompanyId/${companyId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getCompanyIdFromUserId(userId: string): Observable<string> {
    return this.http.get<string>(`${this.basePath}/companies/user/${userId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

}
