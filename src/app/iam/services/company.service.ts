import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs';
import {Company} from '../model/company.entity';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService<Company> {
  constructor() {
    super();
    this.resourceEndpoint = '/companies';
  }

  createCompany(company: Company): Observable<Company> {
    return this.create(company);
  }
}
