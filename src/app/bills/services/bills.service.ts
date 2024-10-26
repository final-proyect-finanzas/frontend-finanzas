import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
