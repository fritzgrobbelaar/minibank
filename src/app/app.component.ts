import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@Component({
  selector: 'app-root',
  imports: [AccountListComponent, TransactionHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'minibank';
}
