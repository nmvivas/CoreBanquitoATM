import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debits-check',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-check.component.html',
  styleUrl: './debits-check.component.css'
})
export class DebitsCheckComponent {
  constructor( private router: Router) {}

  back = () => {
    this.router.navigate(['main']);
  }

  next = () => {
    this.router.navigate(['exit']);
  }

}
