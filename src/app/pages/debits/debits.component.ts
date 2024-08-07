import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-debits',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './debits.component.html',
  styleUrl: './debits.component.css'
})
export class DebitsComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['debits-pass']);
  }

}
