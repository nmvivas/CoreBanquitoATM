import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-type-account',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-type-account.component.html',
  styleUrl: './service-type-account.component.css'
})
export class ServiceTypeAccountComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['transaction-sucessful']);
  }

  back = () => {
    this.router.navigate(['main']);
  }

}
