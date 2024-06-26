import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-value',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-value.component.html',
  styleUrl: './service-value.component.css'
})
export class ServiceValueComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['service-type-account']);
  }

  back = () => {
    this.router.navigate(['service-client']);
  }

}
