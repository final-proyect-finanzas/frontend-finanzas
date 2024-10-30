/**
 * Ejemplo:
 * {
 *   "id": 1,
 *   "companyId": 1,
 *   "bills": [
 *     {
 *       "id": 1,
 *       "number": "134",
 *       "issueDate": "2024-10-22T13:27:36.431+00:00",
 *       "dueDate": "2024-10-22T13:27:36.431+00:00",
 *       "amount": 100,
 *       "currency": "PEN",
 *       "debtorName": "Raul Díaz",
 *       "companyName": "string"
 *     }
 *   ],
 *   "isDiscounted": false
 * }
 *
 */
export class Bill {
  id: number;
  number: string;
  issueDate: Date;
  dueDate: Date;
  amount: number;
  currency: string;
  debtorName: string;
  companyName: string;

  constructor() {
    this.id = 0;
    this.number = '';
    this.issueDate = new Date();
    this.dueDate = new Date();
    this.amount = 0;
    this.currency = '';
    this.debtorName = '';
    this.companyName = '';
  }
}

export class Wallet {
  id: number;
  companyId: number;
  bills: Bill[];
  isDiscounted: boolean;

  constructor() {
    this.id = 0;
    this.companyId = 0;
    this.bills = [];
    this.isDiscounted = false;
  }
}
