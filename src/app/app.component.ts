import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component'; // Add this

@Component({
  selector: 'app-root',
  imports: [AccountListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minibank';
}
