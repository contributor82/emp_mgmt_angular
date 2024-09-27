import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/interface/role';
import { APIResponseModel } from '../../model/class/interface/apiresponsemodel';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';

// In binding, there are 3 ways
// Interpolation such as passing a variable as part of {{}}
// Property binding such as <input [value]= "firstName" />
// Two-way data binding such as <input [(ngModel)]="firstName" />
// FormModule is for two-way data binding.
// Two-way data binding can be used only on input elements.
//Event binding such as <input (click)="showMessage('Welcome Angular')" />

// Included CommonModule for using Structurl directive.

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

//export class RolesComponent {
// Following code illustrate as
// 1. How to add new variable in component class
// 2. How to write parameterless function
// 3. How to write function with parameter

// firstName: String = 'Angular Tutorial';
// angularVersion = "Version 18";
// version: number = 18;
// isActive: boolean = false;
// currentDate: Date = new Date();
// inputType: string = "button";
// selectedState: string = "";

// showWelcomeAlert() {
//   alert('Welcome to Angular 18 tutorial.')
// }

// showMessage(message: string) {
//   alert(message);
// }

//}

export class RolesComponent implements OnInit {

  roleList: IRole[] = [];
  isLoader: boolean = true;
  masterService = inject(MasterService);
  //http = inject(HttpClient);
  // Here we are injecting HttpClient dependency
  // Using dependency injection called constructor dependency injection.

  // constructor(private http: HttpClient) {

  // }

  ngOnInit(): void {
    this.getAllRoles();
  }

  // API Call
  // Currently getting CORS Policy error
  //To fix CORS error,
  // Added proxy.config.json
  // Updated angular.json file section serve/development with  "proxyConfig": "src/proxy.config.json"
  // Updated package.json file and added "start:proxy": "ng serve --proxy-config src/proxy.config.json" in serve section
  // So far still getting CORS error causing no response getting captured.
  // getAllRoles() {
  //   // To catch the data from api call,  we need to use subscribe method
  //   this.http.get<APIResponseModel>('/api/ClientStrive/GetAllRoles').subscribe((res: APIResponseModel) => {
  //     this.roleList = res.data;
  //   }, error => {
  //     alert('Roles cannot be loaded.');
  //   });
  // }

  getAllRoles() {
    this.masterService.getAllRoles().subscribe((response: APIResponseModel) => {
      this.roleList = response.data;
      this.isLoader = false;
    }, error => {
      alert('Roles cannot be loaded');
    });
  }
}
