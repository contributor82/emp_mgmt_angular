import { Component, inject } from '@angular/core';
import { Login } from '../../model/class/Login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login = new Login();

  routerService = inject(Router);

  onLogin() {
    if (this.loginObj.emailId == 'admin.test@test.com' && this.loginObj.password == 'Abc123') {
      this.routerService.navigateByUrl('/client');
      localStorage.setItem('empErpUser', this.loginObj.emailId);
    }
    else {
      alert('Login failed!');
    }

  }
}
