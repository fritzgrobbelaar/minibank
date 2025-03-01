import { Injectable } from '@angular/core';
import { RecurringPayment } from '../models/recurring-payment';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root',
})
export class RecurringPaymentService {
  private payments: RecurringPayment[] = [];
  constructor(private accountService: AccountService) {
    // Simulate payment processing every 5 seconds for demo purposes
    setInterval(() => this.processPayments(), 5000);
  }

  schedulePayment(
    accountName: string,
    amount: number,
    description: string,
    intervalDays: number,
    startDate: Date
  ): RecurringPayment {
    const payment = new RecurringPayment(
      this.payment.length + 1,
      accountName,
      amount,
      description,
      intervalDays,
      startDate
    );
    this.payments.push(payment);
    return payment;
  }

  getPaymentsForAccount(accountName: string): RecurringPayment[] {
    return this.payments.filter(
      (payment) => payment.accountName === accountName && payment.isActive
    );
  }

  //todo
  //     cancelPayment(id: number): void {
  //         const payment = this.payments.find(p => p.id === id);
  //         if (payment) {
  //           payment.isActive = false;
  //         }
  //       }
  //
  //       private processPayments(): void {
  //         const now = new Date();
  //         this.payments.forEach(payment => {
  //           if (payment.isActive && payment.nextPaymentDate <= now) {
  //             this.accountService.withdraw(payment.accountName, payment.amount); // Assume withdraw method exists
  //             payment.updateNextPaymentDate();
  //             console.log(`Processed payment ID ${payment.id}: ${payment.description} for $${payment.amount}`);
  //           }
  //         });
  //       }
}
