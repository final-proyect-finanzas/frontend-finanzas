import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { BillsService } from '../../../bills/services/bills.service';
import { Bills } from '../../model/bills.entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bills',
  standalone: true,
  imports: [
    MatTableModule
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
    'nombreCompania'
  ];

  bills = new MatTableDataSource<Bills>([]);

  constructor(
    private billsService: BillsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('companyId');
      if (companyId) {
        // @ts-ignore
        this.billsService.getBillsByCompanyId(companyId).subscribe((data: Bills[]) => {
          this.bills.data = data;
        });
      }
    });
  }
}
