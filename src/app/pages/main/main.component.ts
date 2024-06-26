import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor( private router: Router) {}

  goToDebits = () => {
    this.router.navigate(['debits']);
  }
  goToServicePay = () => {
    this.router.navigate(['service-pay']);
  }
  goToConsults = () => {
    this.router.navigate(['consult']);
  }
  goToDeposits = () => {
    this.router.navigate(['deposits']);
  }

}
