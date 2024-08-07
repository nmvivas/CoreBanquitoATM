import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SharedDebitService } from '../../../services/debits/shared-debit.service';

@Component({
  selector: 'app-debits-value',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './debits-value.component.html',
  styleUrl: './debits-value.component.css',
})
export class DebitsValueComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private sharedDebitService: SharedDebitService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      amount: [0],
    });
  }

  next = () => {
    const amount = this.form?.get('amount')?.value;
    try {
      if (amount % 10 !== 0) {
        alert('Valor inválido');
        return;
      } else if (amount > 300) {
        alert('El valor máximo es de $300,00');
        return;
      }
    } catch (error) {
      alert('Valor inválido');
      return;
    }
    this.sharedDebitService.setAmount(amount);
    this.router.navigate(['debits-check']);
  };

  back = () => {
    this.router.navigate(['debits-pass']);
  };
}
