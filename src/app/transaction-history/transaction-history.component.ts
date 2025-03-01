import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule],

  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit {
  transactions: {
    fromId: number;
    toId: number;
    amount: number;
    date: Date;
  }[] = [];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.transactions = this.accountService.getTransactions();
  }

  refresh() {
    this.transactions = this.accountService.getTransactions();
  }
}
