import { Component, Input } from '@angular/core';

// Input can be used to pass the data from parent component to child component.
// Here we are creating alertType, alertMessage as Input decorators to pass the data from
// respective components using AlertComponent dynamically.


// Class decorator
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})


export class AlertComponent {

  @Input() alertType: string = '';
  @Input() alertMessage: string = '';
}
