import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bills } from '../model/bills.entity';
import { BaseService } from '../../shared/services/base.service';
import {Company} from '../../iam/model/company.entity';

@Injectable({
  providedIn: 'root'
})
export class BillsService extends BaseService<Bills> {


}
