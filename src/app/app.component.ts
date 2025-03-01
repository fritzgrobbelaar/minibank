import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './app.routes'; // Import your routes

@Component({
  selector: 'app-root',
  //imports: [AccountListComponent, TransactionHistoryComponent, Route],
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'minibank';
}
