import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debits-value',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-value.component.html',
  styleUrl: './debits-value.component.css'
})
export class DebitsValueComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['debits-check']);
  }

  back = () => {
    this.router.navigate(['debits-pass']);
  }
}
