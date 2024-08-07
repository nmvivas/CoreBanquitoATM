import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DebitService } from '../../../services/debits/debit.service';
import { SharedDebitService } from '../../../services/debits/shared-debit.service';

@Component({
  selector: 'app-debits-check',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-check.component.html',
  styleUrl: './debits-check.component.css',
})
export class DebitsCheckComponent {
  constructor(
    private router: Router,
    private debitService: DebitService,
    private sharedDebitService: SharedDebitService
  ) {}

  next = () => {
    const account = this.sharedDebitService.getAccount();
    const debit = {
      accountId: account?.id,
      codeChannel: 'CHA00768934',
      transactionType: 'DEB',
      reference: 'RETIRO ATM',
      amount: this.sharedDebitService.getAmount(),
      creditorAccount: '2249598696',
      debitorAccount: account?.codeInternalAccount,
      status: 'PEN',
      comission: 0,
    };
    console.log(debit);
    this.debitService.createDebit(debit).subscribe({
      next: (data: any) => {
        console.log(data);
        if (!data?.accountId) {
          alert('Error al procesar la transacción');
          return;
        }
        this.router.navigate(['exit']);
      },
      error: (error: any) => {
        console.log(error);
        alert('Error al procesar la transacción');
      },
    });
  };
}
