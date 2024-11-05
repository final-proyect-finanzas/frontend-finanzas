import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Company } from '../model/company.entity';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService<Company> {
  constructor(protected override http: HttpClient) {
    super();
    this.resourceEndpoint = '/companies';
  }
  createCompany(company: Company): Observable<Company> {
    return this.create(company);
  }
  getCompanyIdFromUserId(userId: string): Observable<string> {
    return this.http.get<string>(`${this.basePath}/companies/user/${userId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getCompanyById(companyId: string): Observable<Company> {
    return this.http.get<Company>(`${this.basePath}/companies/${companyId}`, this.getHttpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }
}
