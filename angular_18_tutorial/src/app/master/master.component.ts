import { Component } from '@angular/core';
import { DesignationComponent } from '../components/designation/designation.component';
import { RolesComponent } from '../components/roles/roles.component';
import { CommonModule } from '@angular/common';

// CommonModule to be imported when want to import directives.

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = "Roles";
}
