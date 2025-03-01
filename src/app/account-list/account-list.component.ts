import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts = [
    { id: 1, name: 'Checking Account', balance: 1500 },
    { id: 2, name: 'Savings Account', balance: 5000 },
  ];

  constructor() { }

  ngOnInit(): void { }
}
