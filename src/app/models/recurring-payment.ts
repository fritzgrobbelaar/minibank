export class RecurringPayment {
  id: number;
  accountName: string; // Account to deduct from
  amount: number;
  description: string; // e.g., "Loan Repayment" or "Netflix Subscription"
  intervalDays: number; // Payment frequency (e.g., 30 for monthly)
  nextPaymentDate: Date;
  isActive: boolean;

  constructor(
    id: number,
    accountName: string,
    amount: number,
    description: string,
    intervalDays: number,
    startDate: Date
  ) {
    this.id = id;
    this.accountName = accountName;
    this.amount = amount;
    this.description = description;
    this.intervalDays = intervalDays;
    this.nextPaymentDate = new Date(startDate);
    this.isActive = true;
  }

  // Method to update the next payment date after a payment is processed
  updateNextPaymentDate(): void {
    if (this.isActive) {
      const nextDate = new Date(this.nextPaymentDate);
      nextDate.setDate(nextDate.getDate() + this.intervalDays);
      this.nextPaymentDate = nextDate;
    }
  }
}
