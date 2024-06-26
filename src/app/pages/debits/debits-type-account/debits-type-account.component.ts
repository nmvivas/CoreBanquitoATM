import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-debits-type-account',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './debits-type-account.component.html',
  styleUrl: './debits-type-account.component.css'
})
export class DebitsTypeAccountComponent {
  constructor( private router: Router) {}

  back = () => {
    this.router.navigate(['main']);
  }

  next = () => {
    this.router.navigate(['debits-check']);
  }
  


}
