import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();
  }

  onTransfer(account: account) {
    console.log(
      `Transfer button clicked for ${account.name} with balance ${account.balance}`
    );
    this.transfer(account.id);
  }

  transfer(fromId: number) {
    const toId = 3; // Fixed destination for simplicity
    const amount = 100;
    this.accountService.transfer(fromId, toId, amount);
    this.accounts = this.accountService.getAccounts(); // Refresh the list
  }
}

interface account {
  name: string;
  balance: number;
  id: number;
}
