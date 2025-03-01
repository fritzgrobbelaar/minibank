import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts = [
    { id: 1, name: 'Checking Account', balance: 2500 },
    { id: 2, name: 'Savings Account', balance: 5000 },
  ];

  constructor() { }

  ngOnInit(): void { }

onTransfer(account: any) {
    console.log(`Transfer button clicked for ${account.name} with balance ${account.balance}`);
  }
}
