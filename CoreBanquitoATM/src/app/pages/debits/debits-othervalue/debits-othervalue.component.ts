import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debits-othervalue',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-othervalue.component.html',
  styleUrl: './debits-othervalue.component.css'
})
export class DebitsOthervalueComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['debits-type-account']);
  }

  back = () => {
    this.router.navigate(['debits-value']);
  }

}
