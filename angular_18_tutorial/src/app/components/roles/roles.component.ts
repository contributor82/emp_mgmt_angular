import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// In binding, there are 3 ways
// Interpolation such as passing a variable as part of {{}}
// Property binding such as <input [value]= "firstName" />
// Two-way data binding such as <input [(ngModel)]="firstName" />
// FormModule is for two-way data binding.
// Two-way data binding can be used only on input elements.
//Event binding such as <input (click)="showMessage('Welcome Angular')" />


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: String = 'Angular Tutorial';
  angularVersion = "Version 18";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "button";
  selectedState: string = "";

  showWelcomeAlert() {
    alert('Welcome to Angular 18 tutorial.')
  }

  showMessage(message: string) {
    alert(message);
  }

}
