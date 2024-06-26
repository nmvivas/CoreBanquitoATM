import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-pass',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-pass.component.html',
  styleUrl: './service-pass.component.css'
})
export class ServicePassComponent {

  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['service-company']);
  }

  back = () => {
    this.router.navigate(['service-pay']);
  }


}
