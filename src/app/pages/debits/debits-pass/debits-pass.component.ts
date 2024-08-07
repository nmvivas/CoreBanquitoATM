import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DebitService } from '../../../services/debits/debit.service';
import { SharedDebitService } from '../../../services/debits/shared-debit.service';

@Component({
  selector: 'app-debits-pass',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './debits-pass.component.html',
  styleUrl: './debits-pass.component.css',
})
export class DebitsPassComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private debitService: DebitService,
    private sharedDebitService: SharedDebitService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      pin: [''],
    });
  }

  next = () => {
    const pin = this.form?.get('pin')?.value;
    this.debitService.getAccountByPin(pin).subscribe({
      next: (data: any) => {
        console.log(data);
        if (!data?.id) {
          alert('Pin inválido');
          return;
        }
        this.sharedDebitService.setAccount(data);
        this.router.navigate(['debits-value']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  };

  back = () => {
    this.router.navigate(['debits']);
  };
}
