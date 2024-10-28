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

  createBill(bill: Bills): Observable<Bills> {
    return this.create(bill);
  }

  getBillsByCompanyId(companyId: string): Observable<Bills[]> {
    return this.http.get<Bills[]>(`${this.basePath}/bills/getByCompanyId/${companyId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }
}
