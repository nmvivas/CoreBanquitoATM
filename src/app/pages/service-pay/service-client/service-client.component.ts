import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-client',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-client.component.html',
  styleUrl: './service-client.component.css'
})
export class ServiceClientComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['service-value']);
  }

  back = () => {
    this.router.navigate(['service-company']);
  }

}
