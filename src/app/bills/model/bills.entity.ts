/**
 * Example
 * {
 *   "number": "string",
 *   "issueDate": "2024-10-23T04:26:27.668Z",
 *   "dueDate": "2024-10-23T04:26:27.668Z",
 *   "amount": 0,
 *   "currency": "string",
 *   "debtorName": "string",
 *   "companyId": 0
 * }
 */
export class Bills {
  number: string;
  issueDate: Date;
  dueDate: Date;
  amount: number;
  currency: string; //PEN or USD
  debtorName: string;
  companyId: number;
  documentIdentifierDebtor: string;

  constructor() {
    this.number = '';
    this.issueDate = new Date();
    this.dueDate = new Date();
    this.amount = 0;
    this.currency = '';
    this.debtorName = '';
    this.companyId = 0;
    this.documentIdentifierDebtor = '';
  }
}
