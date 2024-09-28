import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  routerService = inject(Router);

  onLogout() {
    localStorage.removeItem('empErpUser');
    this.routerService.navigateByUrl('/login');
  }
}
