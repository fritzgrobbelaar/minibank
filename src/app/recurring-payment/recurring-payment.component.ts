import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecurringPaymentService } from '../recurring-payment.service';
import { RecurringPayment } from '../models/recurring-payment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recurring-payment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recurring-payment.component.html',
})
export class RecurringPaymentComponent {
  accountName: string = '';
  amount: number = 0;
  description: string = '';
  intervalDays: number = 30; // Default to monthly
  payments: RecurringPayment[] = [];

  constructor(private recurringPaymentService: RecurringPaymentService) {}

  schedulePayment(): void {
    const payment = this.recurringPaymentService.schedulePayment(
      this.accountName,
      this.amount,
      this.description,
      this.intervalDays,
      new Date()
    );
    this.payments = this.recurringPaymentService.getPaymentsForAccount(
      this.accountName
    );
  }

  viewPayments(): void {
    this.payments = this.recurringPaymentService.getPaymentsForAccount(
      this.accountName
    );
  }

  cancelPayment(id: number): void {
    this.recurringPaymentService.cancelPayment(id);
    this.viewPayments();
  }
}
