import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';

// CommonModule to be imported when we want to import directives.
// Directives are of types : Structural and Attribute
// Structual directives changes the behavior of DOM
// Attribute directives add extra style
// Structural directives are *ngIf, *ngFor
// Attribute directives are *ngClass, *ngStyle

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = "Destination";

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}
