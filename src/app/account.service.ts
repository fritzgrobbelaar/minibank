import { Injectable } from '@angular/core';

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
    }
  }
}
