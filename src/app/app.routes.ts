import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { RecurringPaymentComponent } from './recurring-payment/recurring-payment.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'transactions', component: TransactionHistoryComponent },
  //{ path: 'loans', component: LoanComponent },
  { path: 'recurring-payments', component: RecurringPaymentComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: '**', redirectTo: '/accounts' },
];
