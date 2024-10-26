export class Bills {
  id: number;
  number: string;
  issueDate: Date;
  dueDate: Date;
  discountDate: Date;
  amount: number;
  currency: string;
  initialCost: number;
  finalCost: number;
  debtorName: string;
  portfolioId: number;
  bankId: number;
  constructor() {
    this.id = 0;
    this.number = '';
    this.issueDate = new Date();
    this.dueDate = new Date();
    this.discountDate = new Date();
    this.amount = 0;
    this.currency = '';
    this.initialCost = 0;
    this.finalCost = 0;
    this.debtorName = '';
    this.portfolioId = 0;
    this.bankId = 0;
  }
}
