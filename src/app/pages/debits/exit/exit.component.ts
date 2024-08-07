import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  standalone: true,
  imports: [MatIconModule ],
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.css'
})
export class ExitComponent {

  constructor(private router: Router) { }

  next = () => {
    this.router.navigate(['transaction-sucessful']);
  }


}
