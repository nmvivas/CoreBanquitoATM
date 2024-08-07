import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-sucessful',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './transaction-sucessful.component.html',
  styleUrl: './transaction-sucessful.component.css'
})
export class TransactionSucessfulComponent {
  
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['main']);
  }


}
