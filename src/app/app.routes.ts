import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'transactions', component: TransactionHistoryComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: '**', redirectTo: '/accounts' },
];
