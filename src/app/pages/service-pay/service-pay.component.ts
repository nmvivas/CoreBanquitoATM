import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-pay',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './service-pay.component.html',
  styleUrl: './service-pay.component.css'
})
export class ServicePayComponent {
  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['service-pass']);
  }


}
