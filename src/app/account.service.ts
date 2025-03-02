import { Injectable } from '@angular/core';
import { Account } from './models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private transactions: {
    fromId: number;
    toId: number;
    amount: number;
    date: Date;
  }[] = [];
  private accounts = [
    { id: 1, name: 'Checking Account', balance: 1500 },
    { id: 2, name: 'Savings Account', balance: 5000 },
    { id: 3, name: 'Investment Account', balance: 100400 },
  ];
  getAccounts() {
    return this.accounts;
  }

  transfer(fromId: number, toId: number, amount: number) {
    const fromAccount = this.accounts.find((acc) => acc.id === fromId);
    const toAccount = this.accounts.find((acc) => acc.id === toId);
    if (fromAccount && toAccount && fromAccount.balance >= amount) {
      fromAccount.balance -= amount;
      toAccount.balance += amount;
      this.transactions.push({ fromId, toId, amount, date: new Date() });
    }
  }

  withdraw(accountName: string, amount: number): void {
    const account = this.accounts.find((acc) => acc.name === accountName);
    if (account && account.balance >= amount) {
      account.balance -= amount;
    } else {
      console.error(`Insufficient funds or account not found: ${accountName}`);
    }
  }

  getAccount(accountName: string): Account | undefined {
    return this.accounts.find((acc) => acc.name === accountName);
  }

  getTransactions() {
    return this.transactions;
  }
}
