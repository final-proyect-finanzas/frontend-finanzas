import { Component } from '@angular/core';
import {MatCellDef, MatHeaderCellDef, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-view-bills',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatCellDef
  ],
  templateUrl: './view-bills.component.html',
  styleUrl: './view-bills.component.css'
})
export class ViewBillsComponent {

}
