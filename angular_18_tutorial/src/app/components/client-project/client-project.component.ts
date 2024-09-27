import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { ClientProject } from '../../model/class/ClientProject';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIResponseModel } from '../../model/class/interface/apiresponsemodel';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../model/class/interface/employee';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/Client';
import { ClientProjectService } from '../../services/client-project.service';

// This is Reactive form module and not normal form template.

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  // clientProjectObj: ClientProject = new ClientProject();
  //clientProjects: ClientProject[] = [];

  // Creating Client Projects list using signnal
  clientProjects = signal<ClientProject[]>([]);

  employeeService = inject(EmployeeService);
  employeeList: IEmployee[] = [];

  clientService = inject(ClientService);
  clientList: Client[] = [];

  clientProjectService = inject(ClientProjectService);

  clientProjectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [Validators.required, Validators.minLength(15)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(0),

  });

  ngOnInit(): void {
    this.getAllClientProjects();
    this.getAllClients();
    this.getAllEmployee();
  }

  onEditClientProject(clientProjectObj: ClientProject) {

    this.clientProjectForm.controls['clientProjectId'].setValue(clientProjectObj.clientProjectId);
    this.clientProjectForm.controls['projectName'].setValue(clientProjectObj.projectName);
    this.clientProjectForm.controls['startDate'].setValue(formatDate(clientProjectObj.startDate, 'yyyy-MM-dd', 'en'));
    this.clientProjectForm.controls['expectedEndDate'].setValue(formatDate(clientProjectObj.expectedEndDate, 'yyyy-MM-dd', 'en'));
    this.clientProjectForm.controls['leadByEmpId'].setValue(clientProjectObj.leadByEmpId);
    this.clientProjectForm.controls['completedDate'].setValue(formatDate(clientProjectObj.completedDate, 'yyyy-MM-dd', 'en'));
    this.clientProjectForm.controls['contactPerson'].setValue(clientProjectObj.contactPerson);
    this.clientProjectForm.controls['contactPersonContactNo'].setValue(clientProjectObj.contactPersonContactNo);
    this.clientProjectForm.controls['totalEmpWorking'].setValue(clientProjectObj.totalEmpWorking);
    this.clientProjectForm.controls['projectCost'].setValue(clientProjectObj.projectCost);
    this.clientProjectForm.controls['projectDetails'].setValue(clientProjectObj.projectDetails);
    this.clientProjectForm.controls['contactPersonEmailId'].setValue(clientProjectObj.contactPersonEmailId);
    this.clientProjectForm.controls['clientId'].setValue(clientProjectObj.clientId);

  }

  onReset() {
    this.clientProjectForm.reset();
  }

  onSaveClientProject() {
    const clientProjectFormValue = this.clientProjectForm.value;
    debugger;
    this.clientProjectService.addUpdateClientProject(clientProjectFormValue).subscribe((response: APIResponseModel) => {
      if (response.result) {
        alert('Client project created/updated successfully');
        this.getAllClientProjects();
      }
      else {
        alert(response.message);
      }
    });
  }

  onDeleteClientProject(clientProjectId: number) {
    const isDelete: boolean = confirm('Are you sure to delete this client project?');
    if (isDelete) {
      this.clientProjectService.deleteProjectByProjectId(clientProjectId).subscribe((response: APIResponseModel) => {
        if (response.result) {
          alert('Client project deleted successfully');
          this.getAllClientProjects();
        }
        else {
          alert(response.message);
        }
      });
    }
  }


  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response: APIResponseModel) => {
      if (response.result) {
        this.employeeList = response.data;
      }
      else {
        alert(response.message);
      }
    });
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((response: APIResponseModel) => {
      if (response.result) {
        this.clientList = response.data;
      }
      else {
        alert(response.message);
      }
    });
  }

  getAllClientProjects() {
    this.clientProjectService.getAllClientProjects().subscribe((response: APIResponseModel) => {
      //this.clientProjects = response.data; // Regular object array assignment
      this.clientProjects.set(response.data);
    }, error => {
      alert('Client projects cannot be loaded');
    });
  }

}


