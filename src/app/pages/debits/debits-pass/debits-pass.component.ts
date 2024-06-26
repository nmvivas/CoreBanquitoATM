import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debits-pass',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-pass.component.html',
  styleUrl: './debits-pass.component.css'
})
export class DebitsPassComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['debits-value']);
  }

  back = () => {
    this.router.navigate(['debits']);
  }

}
