import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-company',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-company.component.html',
  styleUrl: './service-company.component.css'
})
export class ServiceCompanyComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['service-client']);
  }

  back = () => {
    this.router.navigate(['service-pass']);
  }

}
